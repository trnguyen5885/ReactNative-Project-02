
import { Text, StyleSheet} from 'react-native'
import React from 'react'

function Title({children}) {
  return  <Text style = {styles.title}>{children}</Text>;
  
}


const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        borderRadius: 5,
        maxWidth: '80%'
      }
})

export default Title;
