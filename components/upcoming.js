import { useEffect, useState } from "react";
import { Text,Image,View, FlatList, StyleSheet } from "react-native";
import apikey from "./apikey";
export default function Upcoming(){
    const [upcomingMovie,setUpcomingMovie]=useState([])
    const getMovieData=async()=>{
               const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
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
            setUpcomingMovie(data.results)
          }
    }
    useEffect(()=>{
    getMovieData()
    },[])
    
    return(
        <>
         
                    <View>
                        <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={true} 
                        data={upcomingMovie}
                        renderItem={({item})=>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={style.upcomingimage} />
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
})