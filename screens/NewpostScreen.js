import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import AddNewPost from '../components/newPost/AddNewPost'

const NewpostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:'black', flex: 1}}>
        <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  )
}

export default NewpostScreen