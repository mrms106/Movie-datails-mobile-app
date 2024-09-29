import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import apikey from "./apikey";
import Loader from "./loader";

export default function Seemore({route}){
    const {type}=route.params
    const[typemovie,settypemovie]=useState([])
   const [count,setcount]=useState(1)
   const[loader,setloader]=useState(true)
    const getmoremovie=async()=>{
        const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${count}`;
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
            settypemovie(data.results)
          }
    }
    useEffect(()=>{
    getmoremovie()
    },[count])
    
    if(loader){
        return(
            <Loader size={60}/>
        )
    }
    return(
        <View style={{flex:1,backgroundColor:"#202123"}}>
            <Text style={style.titletext}>{type==="now_playing" ? "Popular": type} movies
            </Text>
           
           <View style={{alignItems:'center'}}>
           <View style={style.horizontalline}></View>
           </View>
           <Text style={{textAlign:'center',color:'white'}}>page: {count}</Text>
            
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
        <View style={style.countview}>
            <Text style={{color:'white'}}>pages : </Text>
            <TouchableOpacity onPress={()=>setcount(1)}>
            <Text style={style.counttext}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setcount(2)}>
            <Text style={style.counttext}>2</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>setcount(3)}>
            <Text style={style.counttext}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setcount(4)}>
            <Text style={style.counttext}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setcount(5)}>
            <Text style={style.counttext}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setcount(6)}>
            <Text style={style.counttext}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setcount(7)}>
            <Text style={style.counttext}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setcount(8)}>
            <Text style={style.counttext}>8</Text>
            </TouchableOpacity>
      
        </View>
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
       
    },
    countview:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    counttext:{
        color:'white',
        margin:5,
        fontSize:18,
        
        width:14,
        textAlign:'center',
        borderRadius:5
    },
})