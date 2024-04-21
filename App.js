/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import firebase from '@react-native-firebase/app';


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
  );
}

const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


