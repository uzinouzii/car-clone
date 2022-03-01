import { View, Text, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import { color } from 'react-native-elements/dist/helpers';
import Header from '../components/searchScreen/Header';
import Boxes from '../components/searchScreen/Boxes';
import Events from '../components/searchScreen/Events';
import { ScrollView } from 'react-native-gesture-handler';
import Clubs from '../components/searchScreen/Clubs';

const SearchScreen = ({navigation}) => {
  return( 
  <ScrollView>
<SafeAreaView style = {styles.container}>
    <Header/>
    <Text style={{color: 'white', backgroundColor: 'black', paddingLeft: 20, fontSize: 20,}}>Popular cars</Text>
    <Boxes navigation={navigation}/>
    <Text style={{color: 'white', backgroundColor: 'black', paddingLeft: 20, fontSize: 20, marginTop: 50}}>Popular Events</Text>
    <Events navigation={navigation}/>
    <Clubs />
  
    
</SafeAreaView>
</ScrollView>
  )
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black', //#100e0a secondary backgroud option
      flex: 1

    }})

export default SearchScreen
