import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Menuitem = () => {
  return (
      <ScrollView>
    <View style = {styles.menuitem}>
      <Image
        source ={require('../../assets/RSmotorshow.png')}
        style ={StyleSheet.image}/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    menuitem: {
        width: '60%', 
        height: '60%', 
        paddingTop: 120,
       
    }, 

    image: {
        width: '90%', 
        height: '30%', 
        opacity: 0.8, 
        borderColor: '#fff',
        borderWidth: 3
    }
})

export default Menuitem