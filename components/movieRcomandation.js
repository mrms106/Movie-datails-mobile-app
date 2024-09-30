import { useEffect, useState } from "react";
import { Text,Image,View, FlatList, StyleSheet,TouchableOpacity } from "react-native";
import apikey from "./apikey";

export default function movieRecomandation({type,Id,recomandation}){
    const [rocomandation,setrocomandation]=useState([])
    const getMovieData=async()=>{
        // const url =  `https://api.themoviedb.org/3/${type}/${Id}/${recomandation}?language=en-US&page=1`
        const url = `https://api.themoviedb.org/3/${type}/${Id}/${recomandation}?language=en-US&page=1`;
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
            if(type==="movie"){
                setrocomandation(data.results)
            }else{
            setrocomandation(data.cast)
            }
           
          }
    }
    useEffect(()=>{
    getMovieData()
    },[type,Id,recomandation])
    
    return(
        <>
         
                    <View>
                        <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={true} 
                        data={rocomandation}
                        renderItem={({item})=>
                            <TouchableOpacity 
                        onPress={() => navigation.navigate('Moviedetails', { movieId: item.id })}
                    >
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={style.upcomingimage} />
                            <Text style={style.moviname}>{item.title} </Text>
                     </TouchableOpacity>
                     
                    }
                    snapToAlignment="center"  
                    decelerationRate="fast" 
                     />
                        
                    </View>
             
        </>
    )
}
const style = StyleSheet.create({
    upcomingimage:{
        width: 150,
         height: 240,
        //  margin:10,
        marginRight:10,
         borderRadius:10
    },
    moviname:{
        // marginRight:10,
        color:'white',
        textAlign:'center',

    }
})