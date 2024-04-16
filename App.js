/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'

import Login  from './src/screens/Login';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = 'Login' component={Login}/>
        <Stack.Screen name = 'Home' component={Home}/>
     </Stack.Navigator>
     </NavigationContainer>
  )
}


