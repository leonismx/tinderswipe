import React, {Component} from 'react'
import Swiper from './Swiper'
import {Button, StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native'
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'
import Card4 from './card4'
import Card5 from './card5'
import Card6 from './card6'

export default class Exemple extends Component {

  constructor (props) {
    super(props)
    this.state = {
      cards: [<Card1/>, <Card2/>, <Card3/>,<Card4/>,<Card5/>,<Card6/>],
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0,
      positionIndex:1
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
      swipedAllCards: true
    })
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

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  submit(index){
  this.state({positionIndex : index + 2});
  }


  render () {

    return (
      <View style={styles.container}>
      <View style={{flex:8}}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped= {(cardIndex)=>{this.submit(cardIndex)}}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={120}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
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
              title: 'SUPER LIKE',
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

        </View>
        <View style={{
        flex: 2,
        flexDirection: 'row',
      }}>
        <View style={{flex:3, backgroundColor: '#2f3847', alignItems:'center'}}>
          <TouchableHighlight onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source={require('./nah.png')}
          />
          </TouchableHighlight>
        </View>
        <View style={{flex:3, backgroundColor: '#2f3847',alignItems:'center'}}>
          <Text style ={{color:'white',fontSize:22}}> {this.state.positionIndex} / {this.state.cards.length} </Text>
        </View>
        <View style={{flex:3, backgroundColor: '#2f3847',alignItems:'center'}}>
        <TouchableHighlight onPress={this._onPressButton}>
        <Image
          style={styles.button}
          source={require('./like.png')}
        />
        </TouchableHighlight>
      </View>
      </View>
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
