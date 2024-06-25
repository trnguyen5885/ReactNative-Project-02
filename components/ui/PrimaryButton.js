
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

function PrimaryButton({children, onPress}) {
  
  return (
    
        <View style = {styles.buttonOuterContainer}>
          <Pressable 
           style = {({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer }
           onPress={onPress} 
           android_ripple={{color: Colors.primary600}}>
            <Text style = {styles.buttonText}>{children}</Text>
          </Pressable>
        </View>
    
  )
}

const styles = StyleSheet.create({

  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden'

  },

  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }

});

export default PrimaryButton;