/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Button } from 'react-native'
import React, {useState} from 'react'
import { auth } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Kullanıcı başarıyla oluşturuldu
        const user = userCredential.user;
        console.log('Kullanıcı oluşturuldu:', user.uid);
      })
      .catch((error) => {
        console.error('Kullanıcı oluşturulamadı:', error);
      });
  };

  const addUserToFirestore = (userId, email, password) => {
    firestore()
      .collection('users')
      .doc(userId)
      .set({
        email: email,
        password: password,
        // Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz
      })
      .then(() => {
        console.log('Kullanıcı verileri Firestore\'a eklendi');
      })
      .catch((error) => {
        console.error('Kullanıcı verileri eklenemedi:', error);
      });
  };


  <Button title="Üye Ol" onPress={handleSignUp}textStyle={styles.loginButtonText}/>;


  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
