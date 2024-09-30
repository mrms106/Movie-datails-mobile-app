import { Button, StyleSheet, Text, View ,ScrollView, TouchableOpacity, StatusBar} from "react-native";
import Trending from "./trandig";
import { useNavigation } from "@react-navigation/native";
import Showmovie from "./showmovieHome";

export default function Home(){
const navigation=useNavigation()
   
    return(
        <ScrollView>
            <StatusBar 
            hidden={true}/>
        <View style={{flex:1,backgroundColor:'#202123'}}>
           <View style={style.trandingview}> 
            <Text style={style.trending}>
                
                Trending
            </Text>
           <TouchableOpacity 
             onPress={() => navigation.navigate('SeeMore', { type: "popular" })}>
             <Text style={style.trendingend}>
                See All
             </Text>
            </TouchableOpacity>
           
            </View>  
            <Trending/>
            <View style={style.trandingview}> 
            <Text style={style.trending}>
                Upcoming
            </Text>
            <TouchableOpacity 
             onPress={() => navigation.navigate('SeeMore', { type: "upcoming" })}>
             <Text style={style.trendingend}>
                See All
             </Text>
            </TouchableOpacity>
            </View>
            <Showmovie movietype="upcoming"/>
            <View style={style.trandingview}> 
            <Text style={style.trending}>
                Top-Rated
            </Text>
            <TouchableOpacity 
             onPress={() => navigation.navigate('SeeMore', { type: "top_rated" })}>
             <Text style={style.trendingend}>
                See All
             </Text>
            </TouchableOpacity>
            </View>
            <Showmovie movietype="top_rated"/>
            <View style={style.trandingview}> 
            <Text style={style.trending}>
                Popular
            </Text>
            <TouchableOpacity 
             onPress={() => navigation.navigate('SeeMore', { type: "now_playing" })}>
             <Text style={style.trendingend}>
                See All
             </Text>
            </TouchableOpacity>
            </View>
            <Showmovie movietype="now_playing"/>
        </View>
        </ScrollView>
    )
}

const style=StyleSheet.create({
    trending:{
        color:'white',
        fontSize:17,
        fontFamily:'FiraSans-Medium',
        margin:15,
        alignItems:'flex-start',
        marginLeft:0
    },
    trandingview:{
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',  
        paddingHorizontal: 15, 
    },
    trendingend:{
        color:'yellow',
        fontSize:14,
        fontFamily:'FiraSans-Medium',
        margin:15,
        marginRight:5,
        alignSelf:'flex-end'
    }
})