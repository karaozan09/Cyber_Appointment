/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Deneme = () => {
  return (
    <SafeAreaView style={styles.continer}>
    <View>
      <Text>Deneme</Text>
    </View>
    </SafeAreaView>
  );
};

export default Deneme;

const styles = StyleSheet.create({
    continer:{
        flex:1,
        backgroundColor:'light-pink',
    },
});
