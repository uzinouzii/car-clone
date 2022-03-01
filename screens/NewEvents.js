import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import MenuItem from '../components/marketplaceScreen/MenuItem'
import { Directions } from 'react-native-gesture-handler'
import { ImageBackground } from 'react-native'
import Menuitem from '../components/searchScreen/Menuitem'

const backgroudIMG = 'https://images.unsplash.com/photo-1571623945489-8fe3524fc905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
const NewEvents = ({navigation}) => {
  return (
    <ImageBackground
        style = {styles.background}
        source = {{uri: backgroudIMG}}>

        <View style = {styles.overlayContainer}>

          <View style ={styles.top}>
            <Text style = { styles.header}> Events and Drives </Text>
          </View>
          <ScrollView style ={{flexDirection: 'row'}}>
          <View style = {styles.menuContainer}>
            <Menuitem/>
            <Menuitem/> 
            <Menuitem/> 
            <Menuitem/> 

          </View>
          </ScrollView>

        </View>




    </ImageBackground>
)
}


const styles = StyleSheet.create ({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .1)'
  }, 

  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  }, 

  header: { 
    color: 'white', 
    fontSize: 28,
    borderColor: 'white', 
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40, 
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)'
  }, 
  
  menuContainer: {
    height: '100%',
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    marginTop: 10,
    flexDirection: 'row',
  }

})
  

export default NewEvents