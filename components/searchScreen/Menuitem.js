import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


const Menuitem = ({navigation}) => {
  return (
    <ScrollView style = {styles.menuitem}>
          <View style = {styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('RegentStreetshow')}>
            <Image source = {require('../../assets/RSmotorshow.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Centraldrive')}>
            <Image source = {require('../../assets/Centraldrive.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Classics')}>
            <Image source = {require('../../assets/Classicsmeet.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('German')}>
            <Image source = {require('../../assets/Germanmeet.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Jap')}>
            <Image source = {require('../../assets/Japmeet.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Wales')}>
            <Image source = {require('../../assets/Walesdrive.png')} />
            </TouchableOpacity>
          </View>
          </ScrollView>
  )
}

const styles = StyleSheet.create({
    
    menuitem: {
        width: '100%', 
        height: '100%', 
        paddingRight: 5,
        flexDirection: 'row',
        
       
    },
    view: {
      flexDirection: 'row',
      paddingTop: 150,
      
    }


})

export default Menuitem