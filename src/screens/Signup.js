/* eslint-disable prettier/prettier */
import { Dimensions, Image, StyleSheet, Text, View,Button } from 'react-native'
import React, {useState} from 'react'
// import { auth } from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';






const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;



const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //KULLANICI İŞLEMLERİ YAPILACAK
// const handleSignUp = () => {
//     auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Kullanıcı başarıyla oluşturuldu
//         const user = userCredential.user;
//         console.log('Kullanıcı oluşturuldu:', user.uid);
//       })
//       .catch((error) => {
//         console.error('Kullanıcı oluşturulamadı:', error);
//       });
//   };

  // const addUserToFirestore = (userId, email, password) => {
  //   firestore()
  //     .collection('users')
  //     .doc(userId)
  //     .set({
  //       email: email,
  //       password: password,
  //       // Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz
  //     })
  //     .then(() => {
  //       console.log('Kullanıcı verileri Firestore\'a eklendi');
  //     })
  //     .catch((error) => {
  //       console.error('Kullanıcı verileri eklenemedi:', error);
  //     });
  // };


  // <Button title="Üye Ol" onPress={handleSignUp}textStyle={styles.loginButtonText}/>;


  return (
    <View>
       <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:"#E8C6F4", 
       width:winWidth, height:winWidth*0.2,
       alignItems:'center'}}>
          
           <Text 
           style={{color:"#771DA1", 
           fontSize:winWidth*0.07, 
           fontWeight:500,
            paddingHorizontal:winWidth*0.03
           }}> ZÜMRA EWL </Text>
           <Image  source={require("../assets/images/4.png")} style={{
            height:winWidth*0.2,
            width:winWidth*0.2,
            borderRadius:winWidth*0.2,
            resizeMode:'contain'

           }}/>
       </View> 
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
