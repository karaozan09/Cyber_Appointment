/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { auth } from '@react-native-firebase/auth';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Burada giriş işlemleri gerçekleştirilebilir
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Kullanıcı giriş yaptı!');
    })
    .catch(error => {
      console.error('Giriş başarısız: ', error);
    });
    // console.log('Email:', email);
    // console.log('Password:', password);
  };

  return (
      <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email adresinizi girin"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Şifre</Text>
      <TextInput
        style={styles.input}
        placeholder="Şifrenizi girin"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Giriş Yap" onPress={handleLogin} textStyle={styles.loginButtonText}/>
      <Button title="Üye Ol" textStyle={styles.loginButtonText}/> {/* burada üye ol butonuna tıklayınca signup sayfasına gitsin. */}
      </View> 
  );
};



export default Login;


const styles = StyleSheet.create({
  container: {
    // flexDirection:'row',
    // justifyContent:'space-between',
    // backgroundColor:'#E8C6F4',
    // width:20,
    // height:10,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 70,
    alignItems:'center',

  },
  label: {
    color: '#771DA1',
    fontSize: 18,
    marginBottom: 5,
    //fontWeight:500,
    // paddingHorizontal: "winWidth*0.03"
},
  input: {
    // color: 'purple',
    // fontWeight: 500,
    width: '100%',
    height: 40,
    borderColor: 'pink',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5, 
},
  button: {
    color: 'purple',
    margin: 50,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
},
  loginButtonText: {
    color: 'purple',
    fontSize: 20,
},

});

