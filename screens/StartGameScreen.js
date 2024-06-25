
import { View, TextInput, StyleSheet, Alert, StatusBar, useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/Colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmNumberHandler() {
        const choosenNumber = parseInt(enteredNumber);

        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be a between 1 and 99', 
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }

        onPickNumber(choosenNumber);
    }

    const marginTopDistance = height < 400 ? 30 : 100;



  return (

    <ScrollView style = {styles.rootContainer}>
        <KeyboardAvoidingView style = {styles.rootContainer} behavior='position'>
            <View style = {[styles.screen, {marginTop: marginTopDistance}]}>
                <StatusBar style = 'light' />
                <Title>Guess My Number</Title>

                <Card>
                    <InstructionText>Enter A Number</InstructionText>
                    <TextInput 
                        style = {styles.numberInput}
                        maxLength={2}
                        keyboardType='number-pad'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={numberInputHandler}
                        value={enteredNumber}
                        />

                        <View style = {styles.buttonsContainer}>
                            <View style = {styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>

                            <View style = {styles.buttonContainer}>
                                <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                </Card>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    
    
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        marginVertical: 8,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
})

export default StartGameScreen;

