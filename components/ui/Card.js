
import { View, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'
import React from 'react'

function Card({children, style}) {
  return (
    <View style = {[styles.card, style]}>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
})

export default Card