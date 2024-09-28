import { Button, StyleSheet, Text, View ,ScrollView, TouchableOpacity} from "react-native";
import Trending from "./trandig";
import Upcoming from "./upcoming";
import Toprated from "./topRated";
import Popular from "./popular";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
const navigation=useNavigation()
   
    return(
        <ScrollView>
        <View style={{flex:1,backgroundColor:'#202123'}}>
           <View style={style.trandingview}> 
            <Text style={style.trending}>
                
                Trending
            </Text>
           <TouchableOpacity 
             onPress={() => navigation.navigate('SeeMore', { type: "popular" })}>
             <Text style={style.trendingend}>
                See More
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
                See More
             </Text>
            </TouchableOpacity>
            </View>
            <Upcoming/>
            <View style={style.trandingview}> 
            <Text style={style.trending}>
                Top-Rated
            </Text>
            <TouchableOpacity 
             onPress={() => navigation.navigate('SeeMore', { type: "top_rated" })}>
             <Text style={style.trendingend}>
                See More
             </Text>
            </TouchableOpacity>
            </View>
            <Toprated/>
            <View style={style.trandingview}> 
            <Text style={style.trending}>
                Popular
            </Text>
            <TouchableOpacity 
             onPress={() => navigation.navigate('SeeMore', { type: "now_playing" })}>
             <Text style={style.trendingend}>
                See More
             </Text>
            </TouchableOpacity>
            </View>
            <Popular/>
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