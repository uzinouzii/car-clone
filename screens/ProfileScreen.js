import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { color } from 'react-native-elements/dist/helpers';
import Profilepage from '../components/profileScreen/Profilepage';


const ProfileScreen = ({navigation}) => (
    <View style = {styles.container}>
            <Profilepage />
        </View>


  )


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
      
  })
export default ProfileScreen;