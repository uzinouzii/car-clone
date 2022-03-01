import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';
import LoginForm from '../components/loginScreen/LoginForm';

const App_logo = 'https://img.icons8.com/ios-glyphs/344/taxi-mobile-app.png'

const LoginScreen = ({navigation}) => (
  <ImageBackground
  style ={styles.container}
  source ={require('../assets/Gtr.png')}>
    <View style ={styles.overlayContainer}>
    <View style ={styles.Logocontainer}>
        <Image source ={{uri: App_logo, height: 100, width:99}}/>
    </View>
    <LoginForm navigation={navigation}/>
</View>
</ImageBackground>
)

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        backgroundColor:'white',
        paddingTop: 50,

    },
    Logocontainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    overlayContainer:{
      flex: 1,
      backgroundColor: 'rgba(47, 163, 218, .1)'
    }
})
export default LoginScreen



 
    