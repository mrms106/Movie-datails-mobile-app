import { useEffect, useState } from "react";
import apikey from "./apikey";
import { StyleSheet, View ,Image,Text,TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RocomandedMovie from "./movieRcomandation";
import Loader from "./loader";
export default function PersonDetails({route}){
    const navigation=useNavigation()
    const { personId,personname } = route.params;
    const [person,setperson]=useState({})
    const[loader,setloader]=useState(true)
    const fetchPerson=async()=>{
                const url = `https://api.themoviedb.org/3/person/${personId}?language=en-US`;
                const options = {
                method: 'GET',
                headers: {
                            accept: 'application/json',
                            Authorization: apikey
                        }
                }
        const responce= await fetch(url,options)
        if(responce.ok){
            setloader(false)
                const persondetail=await responce.json()
                setperson(persondetail)
               
        }
    }
    useEffect(()=>{
        fetchPerson()
    },[])
    if(loader){
        return(
            <Loader size={90}/>
        )
    }
    return(
        <>
            <View style={{flex:1,backgroundColor:"#202123"}}>
        <ScrollView>
        <TouchableOpacity style={styles.overlayButton} onPress={() => navigation.goBack()}>
            <Text style={{ color: 'white', fontSize: 23 }}> ❮ </Text>
        </TouchableOpacity>
                <View style={styles.maindetail}>
                    <Image 
                    style={styles.personimg}
                    source={{uri:`https://image.tmdb.org/t/p/w500/${person.profile_path}`}}/>
                    <Text style={styles.personname}>{person.name}</Text>
                     <Text style={{color:'gray',fontFamily:'FiraSans-Medium'}}>📍 {person.place_of_birth}</Text>
                     <View style={styles.personaldetails}>
                    <View style={styles.pdetailtext}>
                        <Text style={styles.pdetailtext1}>Gender </Text>
                        <Text style={styles.pdetailtext2}>{person && person.gender === 2 ? "Male" : person.gender === 1 ? "Female" : "Unknown"}</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.pdetailtext}>
                        <Text style={styles.pdetailtext1}>Birthday </Text>
                        <Text style={styles.pdetailtext2}>{person && person.birthday ? person.birthday : "N/A"}</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.pdetailtext}>
                        <Text style={styles.pdetailtext1}>Known for </Text>
                        <Text style={styles.pdetailtext2}>{person && person.known_for_department ? person.known_for_department : "N/A"}</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.pdetailtext}>
                        <Text style={styles.pdetailtext1}>Popularity </Text>
                        <Text style={styles.pdetailtext2}>{person && person.popularity ? person.popularity.toFixed(2) : "N/A"}</Text>
                    </View>
                </View>
                  
                </View>
                <View style={styles.biographyview}>
                    <Text style={styles.biographyhead}>Biography</Text>
                    <Text style={styles.biographybody}>{person.biography}</Text>
                   </View>
                   <Text style={styles.movietext}>Movies</Text>
                   <RocomandedMovie type="person" Id={person.id} recomandation="movie_credits" />
                   </ScrollView>
            </View>
        </>
    )
}

const styles=StyleSheet.create({
    maindetail:{
        alignItems:'center',
        marginTop:50
    },
    personimg:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:2,
        borderColor:'white'
    },
    personname:{
        color:"white",
        fontSize:23,
        margin:10,
        marginBottom:3,
        fontFamily:'FiraSans-Medium'
    },
    personaldetails:{
      flexDirection:'row',
      backgroundColor:'#38393B',
      borderRadius:20,
      alignItems:'center',
      textAlign:'center',
      marginTop:20
    },
    pdetailtext:{
        color:'white',
        flexDirection:'column',
        padding:8,
        paddingBottom:15,
        paddingTop:15
       
    },
    pdetailtext1:{
        color:'white',
        marginLeft:5,
        fontFamily:'FiraSans-Medium',
        fontSize:12
    },
    pdetailtext2:{
        color:'lightgray',
        marginLeft:6
    },
    line:{
        width:2,
        height:40,
        backgroundColor:'white'
    },
    biographyview:{
        marginTop:20,
        marginLeft:30
    },
    biographyhead:{
        color:'white',
        fontSize:25,
        fontFamily:'FiraSans-Medium'
    },
    biographybody:{
        color:'white',
        fontSize:16,
        fontFamily:'FiraSans-Medium',
        marginTop:10
    },
    overlayButton: {
        position: 'absolute',
        top: 14,  
        left: 15,  
        backgroundColor: 'orange', 
        padding: 10,
        borderRadius: 15,
    
        
    },
    movietext:{
        color:'white',
        fontSize:25,
        fontFamily:"FiraSans-Medium",
        margin:15
    }
})