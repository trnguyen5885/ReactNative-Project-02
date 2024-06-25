
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

function GuessLogItem({roundNumber, guess}) {
  return (
    <View style = {styles.listGuessItem}>
      <Text style = {styles.textGuessItem}>#{roundNumber}</Text>
      <Text style = {styles.textGuessItem}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listGuessItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderWidth: 1,
        borderColor: Colors.primary800,
        borderRadius: 40,
        backgroundColor: Colors.accent500,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
        width: '100%',
        marginVertical: 8
    },
    textGuessItem: {
        fontFamily: 'open-sans',
        color: Colors.primary800
    }
})

export default GuessLogItem;