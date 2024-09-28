import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";
import Search from "./search";
import { Button,StyleSheet,Text, View, Image,TouchableOpacity, TextInput } from "react-native";
import serch from '../assets/images/search.png'
import menu from '../assets/images/menu.jpeg'
import { useState } from "react";
import Moviedetails from "./moviedetails";
import PersonDetails from "./persondetails";
import Seemore from "./seAllhome";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const [search,setserch]=useState("")
    return (
      
         <NavigationContainer>
           <Stack.Navigator 
           screenOptions={{
            headerStyle:{
                backgroundColor:'#202123',
            }
           }}>
            <Stack.Screen
                    name="Home"
                    component={Home}
                    options={({ navigation }) => ({ 
                        headerTitle: () => (
                            <Text style={style.middleTxt}>
                                <Text style={{ color: 'yellow' }}>M</Text>ovies
                            </Text>
                        ),
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                <Image
                                    source={serch} // Path to the image
                                    style={style.image}
                                />
                            </TouchableOpacity>
                        ),
                        
                    })}
                />
            
           <Stack.Screen name="Search" component={Search} initialParams={{ search: search }}
           options={({ navigation, route }) => ({
            
                headerTitle: () => (
                    <View style={style.inputView}>
                        <TextInput
                                placeholder="Search Movie"
                                style={style.input}
                                placeholderTextColor="#aaa"
                                value={route.params?.search || ''} 
                                onChangeText={(text) => {
                                    navigation.setParams({ search: text }); 
                                }}
                                />
                    </View>
                ),
                headerTitleAlign: 'center',
                headerTintColor:'white',
            })
           }
           />
            <Stack.Screen 
                    name="Moviedetails" 
                    component={Moviedetails} 
                    options={{ headerShown: false }}
                />
                 <Stack.Screen 
                    name="Persondetails" 
                    component={PersonDetails} 
                    options={{ headerShown: false }}
                />
                  <Stack.Screen 
                    name="SeeMore" 
                    component={Seemore} 
                    options={{ headerShown: false }}
                />
           </Stack.Navigator>
        </NavigationContainer>

    );
}

const style=StyleSheet.create({
    leftBtn:{
        marginTop:30,
        marginBottom:20
    },
    rightBtn:{
        marginTop:30,
        marginBottom:20
    },
    middleTxt:{
      marginTop:-10,
      fontSize:30,
      color:'white',
      fontFamily:'FiraSans-Black'
    },
    image:{
        width:25,
        height:25
    },
    inputView:{

    },
    input:{
          color:'white',
          borderWidth:1,
          borderColor:'#aaa',
          width:300,
          height:60,
          borderRadius:20,
          margin:10,
          marginBottom:20,
          marginTop:20,
          fontSize:18,
          padding:10
    }
})