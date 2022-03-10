import { View, Text, Image, StyleSheet, ImageBackground,ScrollView } from 'react-native';
import React from 'react';
import { color } from 'react-native-elements/dist/helpers';
import MenuItem from '../components/marketplaceScreen/MenuItem';


const MarketPlaceScreen = ({navigation}) => {
  return(
    <View style = {styles.container}>
        <MenuItem/>

</View>
   
  )
}

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      backgroundColor: 'black'
    }
      
  })
export default MarketPlaceScreen;