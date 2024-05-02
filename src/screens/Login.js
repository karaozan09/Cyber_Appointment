/* eslint-disable prettier/prettier */
import { Dimensions, Image, StyleSheet, Text, View, TextInput,Button, alert, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';



const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;



const Login = ({navigation}) => {
  const pasword = '123';
  const emaill = 'busra';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function login (){
    if (email === emaill && password === pasword){
      navigation.navigate('Home');
    }
    else {
      navigation.navigate('Home');
    };
  }

  function signup (){
    navigation.navigate('Signup');
  }


  return (
    <SafeAreaView style={styles.continer}>
    <View style={styles.view_style}>
      <Text style={styles.text_title1}>Zümra Ewl</Text>
      <Text style={styles.text_title3}>Güvenliğin eğlenceli hali</Text>
      <View ><Image source={require("../assets/images/4.png")} style={styles.img}/></View>
    </View>
    <View style={styles.view_style2}>
      <TextInput
        style={styles.text_title2}
        placeholder="Email adresinizi girin"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
      style={styles.text_title2}
              placeholder="Şifrenizi girin"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
      />
    </View>
    <View style={styles.view_style3}>
    {/* <Button title="Giriş Yap" onPress={() => {login()}} style={styles}/> */}
    <TouchableOpacity style={styles.buton} onPress={()=>{login()}}><Text>Giriş Yap</Text></TouchableOpacity>
    </View>
    <View style={styles.view_style3}>
    {/* <Button title ="Kayıt Ol" onPress={() => {signup()}} /> */}
    <TouchableOpacity style={styles.buton} onPress={() => {signup()}}><Text>Kayıt Ol</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
    continer:{
        flex:1,
        backgroundColor:'white',
    },
    view_style:{
      flex:1,
      backgroundColor:'#E8C6F4',
      justifyContent:'space-between',
      marginBottom:50,
    },
    view_style2:{
      flex:5,
      backgroundColor:'white',
      justifyContent:'center',
      marginLeft:20,
      marginRight:20,
      borderWidth:1,
      borderColor:'gray',
      borderRadius:10,
      padding:10,

    },
    view_style3:{
      justifyContent:'center',
      flex:1,
      textAlign:'center',
      margin:10,
      padding: 5,
    },
    text_title1:{
      fontSize: 40,
      textAlign:'left',
      color:'#771DA1',
      fontWeight:'bold',
      marginLeft:10,
    },
    text_title2:{
     width: '100%',
     height: 50,
     borderColor: '#771DA1',
     color:'pink',
     borderWidth: 2,
     marginBottom: 10,
     paddingHorizontal: 10,
     borderRadius: 5,
    },
    text_title3:{
      fontSize:20,
      textAlign:'center',
      color:'#771DA1',
      fontWeight:'bold',
      fontStyle:'italic',
      marginBottom:10,
    },
    buton:{
      textAlign:'center',
      fontStyle:'italic',
      color: 'purple',
      backgroundColor:'pink',
      marginLeft: 10,
      marginRight: 10,
      borderRadius:5,
      padding:10,

    },
    img:{
      height:winWidth * 0.2,
      width:winWidth * 0.2,
      borderRadius:winWidth * 0.2,
      resizeMode:'contain',
    },
});

