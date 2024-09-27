import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet,TouchableOpacity,ScrollView } from "react-native";
import apikey from "./apikey";
import { useNavigation } from "@react-navigation/native";

export default function Moviedetails({ route }) {
   const { movieId } = route.params; // Get the movieId from route parameters
   const [moviedetail, setMovieDetail] = useState({});
   const navigation=useNavigation()
   const getMovie = async () => {
       const url = `https://api.themoviedb.org/3/movie/${movieId}`;
       const options = {
           method: 'GET',
           headers: {
               accept: 'application/json',
               Authorization: apikey
           }
       };

       const response = await fetch(url, options);
       if (response.ok) {
           const detail = await response.json();
           setMovieDetail(detail);
       }
   };

   useEffect(() => {
       getMovie();  // Fetch movie details when component loads
   }, []);

   return (
       <View style={styles.container}>
           <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500/${moviedetail.poster_path}` }}
              style={styles.movieImage}
           />
             <TouchableOpacity style={styles.overlayButton} onPress={()=>navigation.navigate("Home")}>
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
});
