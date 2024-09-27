import { useEffect, useState } from "react";
import { Text,Image,View, FlatList, StyleSheet } from "react-native";
import apikey from "./apikey";

export default function trending(){
    const [moviData,setMovieData]=useState([])
    const getMovieData=async()=>{
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
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
            setMovieData(data.results)
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
                        data={moviData}
                        renderItem={({item})=>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={style.trendingimage} />
                    }
                    contentContainerStyle={style.contentContainer}
                    snapToAlignment="center"  // Snap items to start of scroll view
                    decelerationRate="fast"  // Smooth and fast scrolling
                    pagingEnabled={true}
                     
                     />
                    
                    </View>
             
        </>
    )
}
const style = StyleSheet.create({
    trendingimage:{
        width: 270,
         height: 400,
        //  margin:10,
        marginRight:10,
         borderRadius:10
    },
    contentContainer: {
        paddingLeft: 50,  // Start with padding so the first image is shown half
    },
})