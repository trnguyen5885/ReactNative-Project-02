import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';



export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameisOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameisOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameisOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }

  


  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style ={styles.screen}>
      <ImageBackground 
        source={require('./assets/images/background-image.jpg')}
        style = {styles.screen}
        resizeMode='cover'
        imageStyle = {styles.backgroundImage}
      >
        <SafeAreaView style = {styles.screen}>
           {screen}
        </SafeAreaView>
       
      </ImageBackground>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
