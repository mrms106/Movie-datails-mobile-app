import { View,TouchableOpacity,StyleSheet,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function HomeElements({value1,type}){
    const navigation=useNavigation()
    return(
        <View style={style.trandingview}> 
            <Text style={style.trending}>
                
                {value1}
            </Text>
           <TouchableOpacity 
             onPress={() => navigation.navigate('SeeMore', { type: type })}>
             <Text style={style.trendingend}>
                See All
             </Text>
            </TouchableOpacity>
           
            </View> 
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