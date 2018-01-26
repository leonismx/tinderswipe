import React, {PureComponent} from 'react'
import {Button, StyleSheet, Text, View,Image,TouchableOpacity,BackAndroid } from 'react-native'
import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';
import Login from'./login'
import FlowXo from'./webview'
import App from './App'
import Loader from './loader'
import Profile from './profile'
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
   },
   asd: {
     screen: Loader,
     navigationOptions: ({ navigation }) => ({
       header: null,

       // headerTintColor: 'white',
       // headerStyle: { backgroundColor: '#e90d8b'},

     }),
   },
   myprofile: {
     screen: Profile,
     navigationOptions: ({ navigation }) => ({
       headerTitle: 'My Profile',
       headerStyle:{ backgroundColor: '#2f3847'},
       headerTitleStyle:{ color: 'white'},
       headerLeft: null

       // headerTintColor: 'white',
       // headerStyle: { backgroundColor: '#e90d8b'},

     }),
   }
});

export default class Navigation extends React.Component{


  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  render () {
    return(
      <LoginStack/>
    )

  }
}
