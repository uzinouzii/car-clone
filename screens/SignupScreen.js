import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import SignupForm from '../components/signupScreen/SignupForm';



const SignupScreen = ({navigation}) => (
    <ImageBackground
  style ={styles.container}>
    <View style ={styles.overlayContainer}>
    <View style ={styles.Logocontainer}>
            <Image source ={require('../assets/Applogo.png')}/>
            <SignupForm navigation={navigation}/>
        </View>
    </View>
    </ImageBackground>
  )

  const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        backgroundColor:'black',
        paddingTop: 50,

    },
    Logocontainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    overlayContainer:{
      flex: 1,
      backgroundColor: 'black'
    }
})
export default SignupScreen;


