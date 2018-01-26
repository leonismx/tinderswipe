import React, { Component } from 'react';
import { Animated,View,Text,Image, ScrollView,WebView } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <ScrollView>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{ width: '100%', height: '100%',flex:3, justifyContent:'center'}}>

          <Text style={{fontSize:16,padding:10}}>Get to know yourself better and build your future career! With a vip24 account you get a unique opportunity to show your personal interests and preferences to potential employers. vip24 will provide you with a profile and CV that summarizes the best version of yourself including your strengths and motivators in work and leisure. Invest 20 minutes to plan your future career! </Text>

        </View>
        <View style={{width: '100%', height: '100%', flex:3}}>

        <Image style={{
          left: 0,
          bottom: 0,
          top:0,
          right: 0,
          width: '100%',
         height: 310,
          borderRadius:3
        }}
              source={require('./interest.png')}
              resizeMode= 'contain'
            />

        </View>
        <View style={{width: '100%', height: '100%', flex:3}}>
        <Image style={{
          left: 0,
          bottom: 0,
          top:0,
          right: 0,
          width: '100%',
         height: 310,
          borderRadius:3
        }}
              source={require('./personality.png')}
              resizeMode= 'contain'
            />

        </View>
      </View>
      <View style={{height:50, width:undefined, backgroundColor:'#fec42e',alignItems:'center',justifyContent:'center',marginLeft:10,marginRight:10,marginTop:10, borderRadius:3}}>
        <Text style={{fontSize: 28,color:'white'}}>R - Realistic Type</Text>

      </View>
      <View style={{ height: 300,margin:10 }}>

            <WebView
                    style={{height:300,width:undefined}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/kGfS4cJCC5A' }}
            />
        </View>
        <View style={{height:50, width:undefined, backgroundColor:'#6fa7ef',alignItems:'center',justifyContent:'center',marginLeft:10,marginRight:10,marginTop:10, borderRadius:3}}>
          <Text style={{fontSize: 28,color:'white'}}>A - Artistic Type</Text>

        </View>
        <View style={{ height: 300,margin:10 }}>

              <WebView
                      style={{height:300,width:undefined}}
                      javaScriptEnabled={true}
                      domStorageEnabled={true}
                      source={{uri: 'https://www.youtube.com/embed/SObPebKkYgQ' }}
              />
          </View>
          <View style={{height:50, width:undefined, backgroundColor:'#fa561f',alignItems:'center',justifyContent:'center',marginLeft:10,marginRight:10,marginTop:10, borderRadius:3}}>
            <Text style={{fontSize: 28,color:'white'}}>I - Investigative Type</Text>

          </View>
          <View style={{ height: 300,margin:10 }}>

                <WebView
                        style={{height:300,width:undefined}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{uri: 'https://www.youtube.com/embed/gPZ7CCoZ4oE' }}
                />
            </View>

      </ScrollView>

    );
  }
};
