/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';


import Login  from './src/screens/Login';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import Hizmetler from './src/screens/Hizmetler';
import Icerik from './src/screens/Icerik';
import Profil from './src/screens/Profil';
import Duzenle from './src/screens/Duzenle';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
export default function App(){
  const kayit = () => {
    auth().createUserWithEmailAndPassword(
      'zumra@example.com',
       'supersecretpassword',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const giris = () => {
    auth().signInWithEmailAndPassword(
      'zumra@example.com',
       'supersecretpassword',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name = "Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="Hizmetler" component={Hizmetler} options={{headerShown:false}}/>
        <Stack.Screen name="Icerik" component={Icerik} options={{headerShown:false}}/>
        <Stack.Screen name="Profil" component={Profil} options={{headerShown:false}}/>
        <Stack.Screen name="Duzenle" component={Duzenle} options={{headerShown:false}}/>
     </Stack.Navigator>
     </NavigationContainer>
     <Button title='signin' onPress={giris}/>
     <Button title='signup' onPress={kayit}/>

     </SafeAreaView>
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


