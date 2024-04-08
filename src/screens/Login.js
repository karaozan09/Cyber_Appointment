/* eslint-disable prettier/prettier */
import { Dimensions, Image, StyleSheet, Text, TextInput, View , Button } from 'react-native'
import React, { useState } from 'react'


export function Login_screen({navigation}){
  
  const e = 'zum@123'
  const p = '1234' 

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  function login(){
    if(email==e && password==p){
      navigation.navigate('Home')
    }else{
      alert('error'),
      setEmail(''),
      setPassword('')
    }
  }

  return(
    <view>
      <TextInput
      placeholder='Enter Your Email'
      value={email}
      onChangeText={setEmail}
      alignItems='center'
      justifyContent='center'
      style={{backgroundColor :'pink'}}
      />
      <TextInput 
      placeholder='Enter Your Password'
      value={password}
      onChangeText={setPassword} 
      alignItems='center'
      justifyContent='center'
      style={{backgroundColor :'pink'}}
      />
      <Button
      title='login'
      onPress={() => {login()}}
      
      />
    </view>
  )
}



const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height
const Login = () => {

  //const [input , setInput] =useState("")
  function handleNameInput (val){
    // console.log("got values ", input)
    // setInput(val)
  }
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
       {/* <View>
          <TextInput 
            style={{backgroundColor:'white'}}
            value={input}
            onChangeText={(value)=>handleNameInput(value)}
            placeholder='enter your email'
            alignItems='center'
            justifyContent='center'

            
          />
       </View> */}
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})