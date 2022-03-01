import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Header from '../components/home/Header';
import Post from '../components/home/Post'; //wrap post in {}
import { POSTS } from '../data/posts';
import Tabs from '../components/home/Tabs';

const HomeScreen = ({navigation}) =>  {
  return (
    <SafeAreaView style = {styles.container} >
     <Header />
     <ScrollView>
         {POSTS.map((post, index) => (
             <Post post={post} key ={index}/>
         ))}
         
     </ScrollView>
     <Tabs navigation = {navigation}/>


    </SafeAreaView>
    


  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default HomeScreen