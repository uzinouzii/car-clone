import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
    
  return (
    <View style = {styles.header}>
      <Text style = {styles.text}>Explore Events</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        flex: 1

    },

    text: {
        color: 'black',
        fontSize: 20,
        color: 'white'
       
       
    }
})

export default Header