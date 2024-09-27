import { Button, StyleSheet, Text, View ,ScrollView} from "react-native";
import Trending from "./trandig";
import Upcoming from "./upcoming";
import Toprated from "./topRated";
import Popular from "./popular";
export default function Home({navigation}){

   
    return(
        <ScrollView>
        <View style={{flex:1,backgroundColor:'#202123'}}>
           <View style={style.trandingview}> 
            <Text style={style.trending}>
                Trending
            </Text>
            <Text style={style.trendingend}>
                See All
            </Text>
            </View>  
            <Trending/>
            <View style={style.trandingview}> 
            <Text style={style.trending}>
                Upcoming
            </Text>
            <Text style={style.trendingend}>
                See All
            </Text>
            </View>
            <Upcoming/>
            <View style={style.trandingview}> 
            <Text style={style.trending}>
                Top-Rated
            </Text>
            <Text style={style.trendingend}>
                See All
            </Text>
            </View>
            <Toprated/>
            <View style={style.trandingview}> 
            <Text style={style.trending}>
                Popular
            </Text>
            <Text style={style.trendingend}>
                See All
            </Text>
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