import { Button, StyleSheet, Text, View ,ScrollView, TouchableOpacity, StatusBar} from "react-native";
import Trending from "./trandig";
import Showmovie from "./showmovieHome";
import HomeElements from "./homeelements";

export default function Home(){

    return(
        <ScrollView>
            <StatusBar 
            hidden={true}/>
        <View style={{flex:1,backgroundColor:'#202123'}}>
           <HomeElements type="popular" value1="Trending" />
            <Trending/>
            <HomeElements type="upcoming" value1="Upcoming" />
            <Showmovie movietype="upcoming"/>
            <HomeElements type="top_rated" value1="Top-Rated" />
            <Showmovie movietype="top_rated"/>
            <HomeElements type="now_playing" value1="Popular" />
            <Showmovie movietype="now_playing"/>
        </View>
        </ScrollView>
    )
}
