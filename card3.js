import React, {Component} from 'react'
import {Button, StyleSheet, Text, View,Image} from 'react-native'

export default class Card3 extends Component {

render () {
  return (
    <View style={{flex:1, alignItems:'center'}}>
    <Text style={{fontSize: 18
    ,marginTop:10,alignItems:'center'}}> Could you imagine being a doctor and helping people in need? </Text>
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
            source={require('./pics/S14.jpg')}
            resizeMode= 'cover'
          />
        </View>
  )
}

}
