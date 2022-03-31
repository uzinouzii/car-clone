import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
import LoginForm from '../components/loginScreen/LoginForm';


const LoginScreen = ({navigation}) => (
  <ImageBackground
  style ={styles.container}>
    <View style ={styles.overlayContainer}>
    <View style ={styles.Logocontainer}>
        <Image 
        style ={styles.applogo}
        source = {require('../assets/Applogo.png')}/>
    </View>
    <LoginForm navigation={navigation}/>
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
        width: '100%',
        height: '20%'
    },
    overlayContainer:{
      flex: 1,
      backgroundColor: 'black'
    },
    
})
export default LoginScreen



 
    