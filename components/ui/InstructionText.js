
import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import React from 'react'

function InstructionText({children, style}) {
  return <Text style = {[styles.instructionText, style]}>{children}</Text>
  
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: 24,
        // fontWeight: 'bold'
    },
})

export default InstructionText