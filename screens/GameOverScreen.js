import { View, Text, StyleSheet,Image, Dimensions, useWindowDimensions} from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import Colors from '../constants/Colors'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {

  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if(width < 380) {
    imageSize = 150;
  }

  if(height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  };


  return (
    <View style = {styles.screen}>
      <Title>Game Over</Title>

      <View style = {[styles.imageContainer, imageStyle]}>
        <Image style = {styles.image} source={require('../assets/images/success.png')} />
      </View>

      <Text style = {styles.summaryText}>Your phone need 
        <Text style = {styles.hightText}> {roundsNumber} </Text> rounds to guess the number 
        <Text style = {styles.hightText}> {userNumber} </Text> 
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  )
}

const widthDevice = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    // width: widthDevice < 380 ? 150 : 300,
    // height: widthDevice < 380 ? 150 : 300,
    // borderRadius: widthDevice < 380 ? 75 : 150,
    borderWidth: 2,
    borderColor: Colors.primary800,
    margin: 32,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  hightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  }
})

export default GameOverScreen;