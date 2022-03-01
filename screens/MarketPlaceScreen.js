import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { color } from 'react-native-elements/dist/helpers';
import MenuItem from '../components/marketplaceScreen/MenuItem';


const MarketPlaceScreen = ({navigation}) => {
  return(
    <ImageBackground
    style= {styles.container}
    source ={require('../assets/Gtr.png')}>

    <View style ={styles.overlayContainer}>

      <View style = {styles.top}>
        <Text style = {styles.header}>Market Place</Text>
      </View>

      <View style = {styles.menuContainer}>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </View>

    </View>
    </ImageBackground>
   
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    overlayContainer:{
      flex: 1,
      backgroundColor: 'rgba(47, 163, 218, .1)'
    },
    top: {
      height: '25%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      color: '#fff',
      fontSize: 28,
      borderColor: '#fff',
      borderWidth: 2,
      padding: 20,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: 'rgba(255, 255, 255, .1)'
    },

    menuContainer:{
      height: '40%',
      flexDirection: 'row',
      flexWrap: 'wrap',

    }
    
  })
export default MarketPlaceScreen;