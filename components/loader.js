import { View,ActivityIndicator } from "react-native";

export default function Loader({size}){
    return(
        <View style={{backgroundColor: "#202123",flex:1,alignItems:'center',justifyContent:'center',minHeight:200}} >
        <ActivityIndicator
        size={size}
        color={'yellow'}
         />
    </View>
    
    )
}