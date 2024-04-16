/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Burada giriş işlemleri gerçekleştirilebilir
    console.log('Email:', email);
    console.log('Password:', password);
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
      <Button title="Giriş Yap" onPress={handleLogin} />
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
    paddingHorizontal: 20,
    alignItems:'center',

  },
  label: {
    color: '#771DA1',
    fontSize: 18,
    marginBottom: 5,
    // fontWeight:500,
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
},
});

