import React, {Component} from 'react'
import Swiper from './Swiper'
import {Button, StyleSheet, Text, View,TouchableOpacity,Image, Linking,Alert} from 'react-native'
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'
import Card4 from './card4'
import Card5 from './card5'
import Card6 from './card6'
import Login from'./login'
import SelectButtonCard from './selectablecard1'
import Loader from './loader'
export default class Exemple extends Component {

  constructor (props) {
    super(props)

    this.state = {
      cards: [<Card1/>, <Card2/>, <Card3/>,<Card4/>,<Card5/>,<Card6/>,<SelectButtonCard doneSelection={this.jumpCard}/>],
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0,
      positionIndex:1,
      retry:false,
      canSwipe:true,
      hideButtons:false,
    }
  }

  renderCard = card => {
    return (
      <View style={{flex:1}}>
        <View style={styles.card}>
          {card}
        </View>

      </View>
    )
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
      retry:true
    })

    // Linking.openURL('https://google.com')

  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    )
  };

  swipeRight = () => {
    this.swiper.swipeRight()
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  swipeTop = () =>{
    this.swiper.swipeTop()

  }

jumpCard = () =>{
  this.swiper.swipeTop()

}

  onSwipe = (cardIndex)=>{
    if(this.state.positionIndex < this.state.cards.length)
    {
      this.setState({positionIndex : cardIndex + 2})

      if(this.state.positionIndex == 3)
      {
        Alert.alert(
        'From CXS Bot',
        'We can see that it seems like you can be suited for jobs within the tech industry. Let’s answer a couple of more questions, and see if we can give you more direct suggestions!',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
        )
      }

    }
    if (this.state.positionIndex == 7) {
      this.setState({canSwipe:false,
                      hideButtons:true})
    }
  }

  dislikeButton = () => {
    this.swipeLeft()
  }

  likeButton = () => {
    this.swipeRight()
  }

  render () {

    return (
      <View style={styles.container}>
      <View style={{flex:8}}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped= {this.onSwipe}
          verticalSwipe = {false}
          horizontalSwipe = {this.state.canSwipe}
          // onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={120}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          overlayLabels={{
            bottom: {
              title: 'Nah',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'No',
              style: {
                label: {
                  backgroundColor: '#993133',
                  // borderColor: 'black',
                  color: 'white',
                  // borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'Yes',
              style: {
                label: {
                  backgroundColor: '#569cef',
                  // borderColor: 'black',
                  color: 'white',
                  // borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'Definitely',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
        >
        </Swiper>
        {this.state.retry && (
        <Loader asd = {this.props.navigation}/>
          )}

        </View>

        {!this.state.hideButtons && (
          <View style={{
          flex: 2,
          flexDirection: 'row',
        }}>
          <View style={{flex:3, backgroundColor: '#2f3847', alignItems:'center'}}>
            <TouchableOpacity onPress={this.dislikeButton}>
            <Image
              style={styles.button}
              source={require('./nah.png')}
            />
            </TouchableOpacity>
          </View>
          <View style={{flex:3, backgroundColor: '#2f3847',alignItems:'center'}}>
            <Text style ={{color:'white',fontSize:22}}> {this.state.positionIndex} / {this.state.cards.length} </Text>
          </View>
          <View style={{flex:3, backgroundColor: '#2f3847',alignItems:'center'}}>
          <TouchableOpacity onPress={this.likeButton}>
          <Image
            style={styles.button}
            source={require('./like.png')}
          />
          </TouchableOpacity>
        </View>
        </View>
          )}


      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    // borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: '#DEDEDE'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
  button: {
    flex:1,
    alignItems: 'center',
    resizeMode: "contain",
    marginBottom:10
  },

})
