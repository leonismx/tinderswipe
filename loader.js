import React from 'react';
import { Animated,View,Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Loader extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props)
  }


  componentDidMount() {

    const self = this

    this.animation.play();

    setTimeout(function(){

      self.props.asd.navigate('myprofile')

    }, 6000);


  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <LottieView
      loop={true}
        ref={animation => {
          this.animation = animation;
        }}
        style={{
        backgroundColor:'#2f3847',
         width: '100%',
         height: '100%',

       }}
        source={require('./scanning_animation.json')}
      />
      </View>
    );
  }
}
