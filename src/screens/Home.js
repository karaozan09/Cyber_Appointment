/* eslint-disable prettier/prettier */
import { Dimensions, Image, StyleSheet, Text, TextInput, View , Button, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from '../data/data';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const Home = ({navigation}) => {
  function hizmet (item){
   
    navigation.navigate('Hizmetler',{hizmetlerdata:item});
}

  function profil(){
    navigation.navigate('Profil');
  }

  // const [input , setInput] = useState("");
  // function handleNameInput (val){
  //    console.log('got values', input);
  //    setInput(val);

  return (
    <SafeAreaView style={styles.continer}>
       <View style={styles.view1}>
        <View style={{width:winWidth * 0.75}}>
           <Text style={styles.text1}> Zümra Ewl </Text>
           <Text style={styles.text2}>Güvenliğin Eğlenceli Hali</Text>
           </View>
           <View style={{width:winWidth * 0.25}}><Image  source={require('../assets/images/4.png')} style={styles.img1}/></View>
       </View>
       <View style={styles.viewucgen}>
       <Image  source={require('../assets/images/mobilresim2.png')} style={styles.img3}/><Text style={{fontSize: 40, color: 'white'}}>Burada gizli bir text saklanmıştır çünkü ben bir cyber security expertim ihihi</Text>
       <Text style={{fontSize: 25, position: 'absolute', bottom: 15, color: 'white'}}>Şirketler</Text>
       </View>
       <View style={styles.vieworta}>
       {/** company list */}
       <FlatList 
 data={ data}
 renderItem={({item}) =>(
  <TouchableOpacity style={styles.şirketler1} onPress={()=>{hizmet( item)}}>
  <Text style={styles.şirketler2}>{item.name}</Text>
  <Text style={styles.şirketler3}> {item.hakkında}</Text>
  </TouchableOpacity>
 )}

       />

</View>
     
       <View style={styles.altview}>
       <Image resizeMode="stretch" source={require('../assets/images/butonlar.png')} style={styles.img2}/>
       <TouchableOpacity><Text style={{ left:50,position: 'absolute', bottom: 25, fontSize: 25,color:'white', width:100}} onPress={()=>{navigation.goBack()}}>Çıkış</Text></TouchableOpacity>
       <TouchableOpacity><Text style={{ position: 'absolute', bottom: 20,right:15, fontSize: 25,color:'white', width:100}} onPress={()=>{profil()}}>Profil</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};


export default Home;

const styles = StyleSheet.create({
  continer:{
    flex:1,
    backgroundColor:'white',
},
  view1:{
    backgroundColor:'#E8C6F4',
      justifyContent:'space-evenly',
      marginBottom:50,
      height:winWidth * 0.3,
      width:winWidth,
      flexDirection:'row',
      padding:winWidth * 0.05,
  },
  text1:{
    fontSize: 40,
      textAlign:'left',
      color:'#771DA1',
      fontWeight:'bold',
      marginLeft:10,
  },
  text2:{
    fontSize:20,
      textAlign:'center',
      color:'#771DA1',
     fontWeight:'bold',
      fontStyle:'italic',
      marginBottom:10,
  },
  img1:{
      alignItems:'center',
      borderRadius: winWidth * 0.22,
      height:winWidth * 0.22,
      width:winWidth * 0.22,
      alignSelf:'flex-end',
  },
  vieworta:{
    flex:18,
      justifyContent:'center',
      borderWidth:1,
      borderColor:'white',
      borderRadius:10,
      padding:20,
      margin:20,
      paddingBottom:60,
  },
  altview:{
    height:winWidth ,
      flex:1,
      justifyContent:'flex-end',
 
      
  },
  img2:{
    width:winWidth,
      justifyContent:'center',
      height:winWidth * 0.4,
      alignItems:'center',
      alignSelf:'center',
   

  },
  img3:{
    width:winWidth * 0.4 ,
    height:winWidth * 0.2,
    alignItems:'flex-start',
    alignSelf:'flex-start',
    justifyContent:'flex-start',
  },
  viewucgen:{
    flex:1,
    justifyContent:'center',
  },
  şirketler1:{
    padding:10,
  },
  şirketler2:{
    fontSize: 20,
    textAlign:'left',
    color: 'purple',
    fontWeight:'bold',
    backgroundColor:'#E8C6F4',
  },
  şirketler3:{
    fontSize: 15,
    textAlign:'left',
    color: 'black',
    backgroundColor:'#E8C6F4',
    padding:10,
  },
});
