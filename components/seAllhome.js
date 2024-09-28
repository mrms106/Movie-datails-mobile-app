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
            <Text style={style.titletext}>{type==="now_playing" ? "Popular": type} movies
            </Text>
           <View style={{alignItems:'center'}}>
           <View style={style.horizontalline}></View>
           </View>
            
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
            <TouchableOpacity style={style.overlayButton} onPress={() => navigation.goBack()}>
            <Text style={{ color: 'white', fontSize: 23 }}> ❮ </Text>
        </TouchableOpacity>
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
        
    },
    overlayButton: {
        position: 'absolute',
        top: 14,  
        left: 15,  
        backgroundColor: 'orange', 
        padding: 10,
        borderRadius: 15,
    
        
    },
    titletext:{
        textAlign:'center',
        margin:15,
        color:'white',
        fontSize:25,
        fontFamily:'FiraSans-Medium'
    },
    horizontalline:{
        height:2,
        backgroundColor:'orange',
        width:250,
        margin:5,
        marginBottom:20
       
    }
})