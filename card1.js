import React, {PureComponent} from 'react'
import {Button, StyleSheet, Text, View,Image} from 'react-native'

export default class Card1 extends PureComponent {

render () {
  return (
      <View style={{flex:1, alignItems:'center'}}>
      <Text style={{fontSize: 18
      ,marginTop:30,justifyContent:'center',alignItems:'center', color:'#2f3847'}}>
你喜欢画画吗？ </Text>
        <Image style={{
    marginTop:30,
    left: 0,
    bottom: 0,
    top:0,
    right: 0,
    width:300,
    height: 300,
    borderRadius:150
  }}
              source={require('./pics/A14.jpg')}
              resizeMode= 'cover'
            />
          </View>
  )
}

}
