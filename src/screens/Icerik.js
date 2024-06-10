/* eslint-disable prettier/prettier */
import { Dimensions, Image, StyleSheet, Text, TextInput, View , Button, TouchableOpacity, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hizmtler from './Hizmetler';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Icerik = (props) => {
  const{navigation,route} = props;
  const {icerikData} = route?.params; 
  console.log('icerikData',icerikData)
 
  const [selectedIndex,setSelectedIndex ] = useState(-1); 
const [selectedClock ,setSelecetedClock] =useState({});  

  const chooseClock = (saat,index)=>{
    console.log('selected index',index)
    setSelectedIndex(index)
    setSelecetedClock(saat)
    
    
    

  }
  const randevu = ()=>{

    Alert.alert('Seçilen Randevu Saati',JSON.stringify(selectedClock));
    

  }

  const RenderItem = ({item})=>{

    return (
       <View >
          <Text> 
            {item.tarih}
          </Text>
          {
            item.saatler.map((saat,index)=>{
              return(
                 <TouchableOpacity  key={index} onPress={()=>chooseClock(saat,index)}   style={{width:winWidth * 0.25, height:winHeight * 0.05, backgroundColor:selectedIndex == index? '#333333': '#E8C6F4', alignItems:'center', justifyContent:'center', margin:5, borderRadius:2}}  >
                 <Text style={{color:'black', fontWeight:'bold'}}> {saat}</Text>
                  </TouchableOpacity>
              )
              
            })
          }
       </View>
    )
  }

   
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
    <Text style={{fontSize: 25, position: 'absolute', bottom: 15, color: 'white'}}>İçerik</Text>
    </View>
    <View style={styles.vieworta}>
     {/** content starts here */}
      
      <Text style={styles.txt}>Hizmet: {icerikData.hizmetAdi} </Text>
      
      <Text style={styles.txt}>Fiyat: {icerikData.fiyat} </Text>
      <Text style={styles.txt}>Hizmet İçeriği: {icerikData.icerik} </Text>
      <Text style={styles.txt}>Uygunluk Saatleri:  </Text>

      <FlatList 
        data={icerikData?.uygunlukTarihleri}
        renderItem={({item}) =>  <RenderItem item={item} /> }
      keyExtractor={(item, index) => index.toString()}
       />

    </View>
    <View style={styles.altview}>
    <Image resizeMode="stretch" source={require('../assets/images/butonlar.png')} style={styles.img2}/>
    <TouchableOpacity><Text style={{ left:50,position: 'absolute', bottom: 25, fontSize: 25,color:'white', width:100}} onPress={()=>{navigation.goBack()}}>Çıkış</Text></TouchableOpacity>
       <TouchableOpacity><Text style={{ position: 'absolute', bottom: 20,right:15, fontSize: 25,color:'white', width:100}} onPress={()=>{randevu()}}>Randevu</Text></TouchableOpacity>
     </View>
 </SafeAreaView>
  )
}

export default Icerik;

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
    txt:{
      fontSize:20,
        textAlign:'left',
        margin:5,
        color:'black',
        fontWeight:'bold',
    },
    altview:{
      height:winWidth * 0.5,
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