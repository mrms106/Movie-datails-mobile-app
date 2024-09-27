import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import apikey from "./apikey";

export default function Moviedetails({ route }) {
   const { movieId } = route.params; // Get the movieId from route parameters
   const [moviedetail, setMovieDetail] = useState({});

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
           console.warn(detail);  // Debugging output
       }
   };

   useEffect(() => {
       getMovie();  // Fetch movie details when component loads
   }, []);

   return (
       <View style={styles.container}>
           <Text style={styles.title}>{moviedetail.title}</Text>
           <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500/${moviedetail.poster_path}` }}
              style={styles.movieImage}
           />
           <Text style={styles.overview}>{moviedetail.overview}</Text>
       </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202123",
        padding: 20,
    },
    title: {
        color: "white",
        fontSize: 24,
        marginBottom: 10,
    },
    movieImage: {
        width: "100%",
        height: 400,
        marginBottom: 20,
    },
    overview: {
        color: "#aaa",
        fontSize: 16,
    }
});
