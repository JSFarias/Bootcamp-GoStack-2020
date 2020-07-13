import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'

export default function App(){
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1' translucent/>
      <View style={styles.container}>
        <Text style={styles.title}>Hello Jhon</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#7159c1',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontSize:32,
    fontWeight:'bold',
    color:'#FFF',
  }
})