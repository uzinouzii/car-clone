import { View, Text, StyleSheet, Image  } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Navigation } from 'react-native-navigation';
import { useNavigation } from '@react-navigation/native';

const Events = ({navigation}) => {
  return (
    <View style = {styles.menuItem}>
     <TouchableOpacity onPress={() => navigation.navigate('NewEvents')}>
    <Image
        style= {styles.container}
        source ={require('../../assets/events.png')}>  
    </Image>
    </TouchableOpacity>
      </View>
       
  )
}

const styles = StyleSheet.create({
    container: {
         width: 200,
         height: 100,
    },
    header: {
        color: 'white',
        marginTop: 80,
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 20
    },
        menuItem: {
            width: '50%',
            height: '60%',
            marginTop: 20,
            paddingLeft: 20,
            backgroundColor: 'black',
            flex: 1
        },
       
      
    })
    

export default Events;