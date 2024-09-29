import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet,TouchableOpacity,ScrollView, FlatList, ActivityIndicator } from "react-native";
import apikey from "./apikey";
import { useNavigation } from "@react-navigation/native";
import SimilarMovie from "./similarmovie";
import Loader from "./loader";

export default function Moviedetails({ route }) {
   const { movieId } = route.params; // Get the movieId from route parameters
   const [moviedetail, setMovieDetail] = useState([]);
   const [credits,setcredits]=useState({})
   const[loader,setloader]=useState(true)
   const navigation=useNavigation()

   const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: apikey
    }
};
   const getMovie = async () => {
       const url = `https://api.themoviedb.org/3/movie/${movieId}`;
       const response = await fetch(url, options);
       if (response.ok) {
           const detail = await response.json();
           setMovieDetail(detail);
       }
   };

   const getCredits=async()=>{
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    const response=await fetch(url,options)
    if(response.ok){
        setloader(false)
       const creditdata= await response.json()
       setcredits(creditdata.cast)
       
    }
   }

   useEffect(() => {
       getMovie();
       getCredits()
   }, [movieId]);
if(loader){
    return(
     <Loader size={100}/>
    )
}
   return (
   
       <View style={styles.container}>
         <ScrollView>
           <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500/${moviedetail.poster_path}` }}
              style={styles.movieImage}
           />
             <TouchableOpacity style={styles.overlayButton} onPress={() => navigation.goBack()}>
            <Text style={{ color: 'white', fontSize: 23 }}> ❮ </Text>
        </TouchableOpacity>
          <View style={styles.detail}>
          <Text style={styles.title}>{moviedetail.title}</Text>
          <Text style={styles.date}>Released: {moviedetail.release_date}         {moviedetail.runtime} mins</Text>
          <Text style={styles.adventure}>
          {
            moviedetail.genres && moviedetail.genres.length > 0 && moviedetail.genres.map((item) => (
                <Text style={{ padding: 10 }}> *{item.name} </Text>
            ))
            }

          </Text>
          </View>
          <Text style={styles.overview}>{moviedetail.overview}  </Text>

        <Text style={{color:'white',fontSize:20,fontFamily:'FiraSans-Medium',marginTop:15,marginLeft:5}}>Top-Cast</Text>
          <FlatList
           horizontal={true}
          data={credits}
          renderItem={({item})=>
            <View>
          <TouchableOpacity 
                        onPress={() => navigation.navigate('Persondetails', { personId: item.id,personname:item.name })}
                    >
           <Image
           style={styles.creditimage}
           source={{uri:`https://image.tmdb.org/t/p/w500/${item.profile_path}`}}
            />
            </TouchableOpacity>
             <Text style={styles.credittext}>{item.name}</Text>
            </View>
          } />
          <Text style={styles.similartext}>Similar Movies</Text>
          <SimilarMovie movieId={movieId}/>
          </ScrollView>
       </View>
       
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202123",
       
    },
    detail:{
        alignItems:'center',
        textAlign:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        color: "white",
        fontSize: 30,
        marginBottom: 1,
        fontFamily:'FiraSans-Medium'
    },
    date:{
        color:'white',
        fontSize:15,
         fontFamily:'FiraSans-Medium'
    },
    adventure:{
   color:'white',
   fontSize:15,
   marginBottom:10

    },
    movieImage: {
        width: "100%",
        height: 500,
        marginBottom: 0,
        borderRadius:5,
        marginTop:-30,
        position: 'relative'
    
    },
    overview: {
        color: "white",
        fontSize: 16,
        fontFamily:'FiraSans-Medium',
        marginLeft:10,
        marginRight:10
    },
    overlayButton: {
        position: 'absolute',
        top: 14,  
        left: 15,  
        backgroundColor: 'orange', 
        padding: 10,
        borderRadius: 15,
    
        
    },
    creditimage:{
        width:110,
        height:110,
        borderRadius:55,
        margin:10,
        borderWidth:2,
        borderColor:'white'
    },
    credittext:{
        marginLeft:19,
        marginRight:10,
        color:'white',
        fontFamily:'FiraSans-Medium'
    },
    similartext:{
        color:'white',
        fontSize:20,
        margin:15,
        fontFamily:'FiraSans-Medium'
    }
});
