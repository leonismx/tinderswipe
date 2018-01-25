import React, {PureComponent} from 'react'
import {Button, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';
import Login from'./login'
import FlowXo from'./webview'
import App from './App'

const LoginStack = StackNavigator(
 {
  Root: {
   screen: Login,
   navigationOptions: ({ navigation }) => ({
     header: null,

   }),
   },

   Flow: {
     screen: FlowXo,
     navigationOptions: ({ navigation }) => ({
       headerTitle:"CXS Profile ChatBot",
       headerTintColor:'#2f3847',
       headerRight:
       <View style={{ marginRight: 15 }}>
       <TouchableOpacity onPress={() =>  navigation.navigate('Swipe')}>
            <Text>Skip</Text>
        </TouchableOpacity>
       </View>,
     }),
   },

   Swipe: {
     screen: App,
     navigationOptions: ({ navigation }) => ({
       header: null,

       // headerTintColor: 'white',
       // headerStyle: { backgroundColor: '#e90d8b'},

     }),
   }
});

export default class Navigation extends React.Component{


  render () {
    return(
      <LoginStack/>
    )

  }
}
