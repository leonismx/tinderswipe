import React, {PureComponent} from 'react'
import {Button, StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native'
import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';

export default class Login extends PureComponent {


navigateToFlow = () =>{
  this.props.navigation.navigate('Flow')
}

render () {
  return (

    <View style={{flex:1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'}}>
    <TouchableHighlight onPress={this.navigateToFlow}>
    <Image
    style={{
      width: '100%',
      height: '100%',
    resizeMode:'cover'}}
      source={require('./cxslogin.png')}
    />
    </TouchableHighlight>
  </View>

  )
}

}
