import React, {PureComponent} from 'react'
import {Button, StyleSheet, Text, View,Image, WebView,ActivityIndicator} from 'react-native'
import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';

export default class FlowXo extends PureComponent {

  ActivityIndicatorLoadingView() {

  return (
    <ActivityIndicator
      color='#2f3847'
      size='large'
      style={styles.ActivityIndicatorStyle}
    />
  );
  }

render () {
  return (

    <WebView
        source={{uri: 'https://fxo.io/m/pwwe5e9y'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={this.ActivityIndicatorLoadingView}
        startInLoadingState={true}
        thirdPartyCookiesEnabled={false}
      />


  )
}

}

const styles = StyleSheet.create(
{

ActivityIndicatorStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'

}
});
