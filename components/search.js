import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View,Image } from "react-native";
import apikey from "./apikey";

export default function Search({ route }){
    const { search } = route.params;
    const [serchdata,setSearchData]=useState([])

    const serchQuery=async()=>{
        const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${search}`;
        const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:apikey
        }
      };
        const responce=await fetch(url,options)
        if(responce.ok){
            data=await responce.json()
            // console.warn(data)
            setSearchData(data.results)

        }
    }
useEffect(()=>{
    serchQuery()
},[search])
    return(
        <View style={{flex:1,backgroundColor:"#202123"}}>
            <FlatList
             numColumns={2}
            data={serchdata}
            renderItem={({item,idx })=>
                <View style={style.mainserch} key={idx}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={style.serchimg} />
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