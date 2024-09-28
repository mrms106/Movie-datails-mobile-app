import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import apikey from "./apikey";

export default function Seemore({route}){
    const {type}=route.params
    const[typemovie,settypemovie]=useState([])

    const getmoremovie=async()=>{
        const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=2`;
        const options = {
                            method: 'GET',
                            headers: {
                                accept: 'application/json',
                                Authorization: apikey
                            }
                        };
       const responce=await fetch(url,options)
          if(responce.ok){
            const data= await responce.json()
            settypemovie(data.results)
          }
    }
    useEffect(()=>{
    getmoremovie()
    },[])
    
   
    return(
        <View style={{flex:1,backgroundColor:"#202123"}}>
            <FlatList
             numColumns={2}
            data={typemovie}
            renderItem={({item,idx })=>
                <View style={style.mainserch} key={idx}>
                     <TouchableOpacity 
                        onPress={() => navigation.navigate('Moviedetails', { movieId: item.id })}
                    >
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={style.serchimg} />
                </TouchableOpacity>
                </View>
        }
            />
        </View>
    )
}

const style=StyleSheet.create({
    serchimg:{
        width:150,
        height:200,
        borderRadius:10
    },
    mainserch:{
         padding:20
        
    }
})