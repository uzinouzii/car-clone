import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import Post from '../components/home/Post'; //wrap post in {}
import { POSTS } from '../data/posts';
import Tabs from '../components/home/Tabs';
import { db } from '../firebase';

const HomeScreen = ({navigation}) =>  {

  const [posts, setPosts] = useState([])
      useEffect(() => {
        db.collectionGroup('posts').onSnapshot(snapshot => {
          console.log(snapshot.docs.map(doc => doc.data()))
        })
      }, []) 
  return (
    <SafeAreaView style = {styles.container} >
     <Header navigation={navigation} />
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