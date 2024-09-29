import { useEffect, useState } from "react";
import { Text,Image,View, FlatList, StyleSheet,TouchableOpacity } from "react-native";
import apikey from "./apikey";
import { useNavigation } from "@react-navigation/native"; // To use navigation
import Loader from "./loader";
export default function trending(){
    navigation=useNavigation()
    const [moviData,setMovieData]=useState([])
    const[loader,setloader]=useState(true)
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
            setloader(false)
            const data= await responce.json()
            setMovieData(data.results)
          }
    }
    useEffect(()=>{
    getMovieData()
    },[])
    if(loader){
        return(
            <Loader size={40}/>
        )
    }
    return(
        <>
         
                    <View>
                        <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={true} 
                        data={moviData}
                        renderItem={({item})=>
                            <TouchableOpacity 
                        onPress={() => navigation.navigate('Moviedetails', { movieId: item.id })}
                    >
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={style.trendingimage} />
                        </TouchableOpacity>
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