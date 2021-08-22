import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import  MealsNavigator from './Navigation/MealsNavigation';

import {enableScreens} from 'react-native-screens'

enableScreens();
const fetchFonts =()=>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}



export default function App() {
  const[FontLoaded, setFontLoaded] =useState(false);
  // if(!FontLoaded){
  //   return(
  //    <AppLoading 
  //     startAsync={fetchFonts}
  //     onFinish={()=>setFontLoaded(true)}
  //     onError={(err)=>console.log(err)}
  //     />
  //   )
  // }
  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
