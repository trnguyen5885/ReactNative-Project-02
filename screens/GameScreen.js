import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;



function GameScreen({userNumber, onGameOver}) {
 

  const initialGuess = generateRandomBetween(1 , 100, userNumber )

  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  const [guessRounds, setGuessRounds] = useState([initialGuess])

  const {width, height} = useWindowDimensions()

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess,userNumber,onGameOver])

  useEffect(() => {
    minBoundary = 1,
    maxBoundary = 100
  }, [])


  

  

  
  function nextGuessHandler(direction) {

    if(
      (direction === 'lower' && currentGuess < userNumber)
      || (direction === 'higher' && currentGuess > userNumber))
      {
        Alert.alert("Don't lie !", 'You know that this is wrong...', 
          [{text: 'Sorry', style: 'cancel'}]);
        return;
    }

    if(direction === 'lower') {
        maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const randomNewNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(randomNewNumber)
    setGuessRounds(prevGuessRounds => [randomNewNumber, ...prevGuessRounds ])

}

const guessRoundsLength = guessRounds.length;

let content = <>
    <NumberContainer> {currentGuess} </NumberContainer>
      <Card style={styles.card}>
        <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
        <View style = {styles.buttonsContainer}>
          <View style = {styles.buttonContainer}>
           <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            <Feather name='plus' size={18} color='white' />
           </PrimaryButton>
          </View>

          <View style = {styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Feather name="minus" size={18} color="white" />
            </PrimaryButton>
          </View>
          
          
        </View>
      </Card>
</>

  if(width > 500) {
    content =  
    <>
    <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
    <View style = {styles.buttonsContainerWide}>
          <View style = {styles.buttonContainer}>
           <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            <Feather name='plus' size={18} color='white' />
           </PrimaryButton>
          </View>
        <NumberContainer> {currentGuess} </NumberContainer>

        <View style = {styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Feather name="minus" size={18} color="white" />
            </PrimaryButton>
        </View>
    </View>
    
    </>
    
    
  }


  return (
    
    <View style = {styles.screen}>
      <Title>Opponent's Guess</Title>
        {content}
      
        <View style = {styles.listContainer}>
          {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}
          <FlatList 
          data={guessRounds}
          renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsLength - itemData.index} guess={itemData.item} />}
          keyExtractor={(item) => item }
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  card: {
    marginBottom: 12
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
      flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
  
})

export default GameScreen;

