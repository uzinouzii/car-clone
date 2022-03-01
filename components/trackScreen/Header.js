import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({navigation}) => {
    return (
        <View style = {styles.header}>
          <Text style = {styles.text}>Tracks near you</Text>
        </View>
      )
    }
    const styles = StyleSheet.create({
        header: {
            width: '100%',
            height: '30%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 90
        
            
        },
    
        text: {
            color: 'white',
            fontSize: 20,
            
           
           
        }
    })

export default Header