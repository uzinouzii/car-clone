import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { makeStyles } from 'react-native-elements'

const MenuItem = () => {
  return (
    <View style = {styles.menuItem}>
      
      <Image
        style ={styles.image}
        source={require('../../assets/lambo.png')}
        />
        <Text style = {styles.header}>Market Place</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    menuItem: {
        width: '33.333333%',
        height: '50%',
        padding: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.9,
        borderColor: '#fff',
        borderWidth: 3
    }
})

export default MenuItem