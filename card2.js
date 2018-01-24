import React, {Component} from 'react'
import {Button, StyleSheet, Text, View,Image} from 'react-native'

export default class Card2 extends Component {

render () {
  return (
    <View style={{flex:1, alignItems:'center'}}>
    <Text style={{fontSize: 18
    ,marginTop:10,justifyContent:'center',alignItems:'center'}}> Do you find programming (any type) interesting? </Text>
      <Image style={{
  marginTop:20,
  left: 0,
  bottom: 0,
  top:0,
  right: 0,
  width:300,
  height: 300,
  borderRadius:150
}}
            source={require('./pics/C11.jpg')}
            resizeMode= 'cover'
          />
        </View>
  )
}

}
