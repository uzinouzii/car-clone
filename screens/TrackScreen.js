import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import Tracks from '../components/trackScreen/Tracks';
import { color } from 'react-native-elements/dist/helpers';
import { ScrollView } from 'react-native-gesture-handler';

const Backgroudimage = 'https://images.unsplash.com/photo-1475701838571-da463ac4e5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1270&q=80'

const TrackScreen = ({navigation}) => {
  return(
     <ImageBackground
        style = {styles.container}
        source = {{uri: Backgroudimage}}>
          <View style = {styles.header}>
            <Text style ={{color: 'white', fontWeight: 'bold', fontSize: 20}} > TRACKS </Text>
            </View>
                <Tracks navigation = {navigation}/>
      </ImageBackground>
  )
}
  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      width: '100%', 
      height: '100%',
    },


    header: {
    width: '100%', 
    height: '15%',
    alignItems: 'center', 
    justifyContent: 'center',
    }, 

 
  
  })
export default TrackScreen;
