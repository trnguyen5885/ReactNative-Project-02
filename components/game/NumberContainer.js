
import { View, Text, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';


function NumberContainer({children}){


  return (
    <View style = {styles.container}>
      <Text style = {styles.numberText}>{children}</Text>
    </View>
  )
}

const widthDevice = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        padding: widthDevice < 380 ? 12 : 24,
        margin: widthDevice < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontSize: widthDevice < 380 ? 28 : 46,
        color: Colors.accent500,
        fontWeight: 'bold'
    }
})

export default NumberContainer;