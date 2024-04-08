/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import {NavigationContainer} from '@react-navigation/native'

// import LoginScreen from './screens/Login';
// import Home from './screens/Home';



// const Stack = createNativeStackNavigator();

// export default function App(){
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='login' component={LoginScreen}/>
//         <Stack.Screen name='Home' component={Home}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Home />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'purple',
//   },
//   text:{fontSize:20, color:'white'},
// });

// eslint-disable-next-line prettier/prettier

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Test from './src/screens/Test';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login}/>
     </Stack.Navigator>
     </NavigationContainer>
  )
}

// eslint-disable-next-line prettier/prettier
export default App

const styles = StyleSheet.create({})