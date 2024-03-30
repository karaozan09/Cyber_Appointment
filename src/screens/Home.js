/* eslint-disable prettier/prettier */
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height
const Home = () => {
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
  )
}

export default Home

const styles = StyleSheet.create({})