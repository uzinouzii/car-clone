import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
const Wales = ({navigation}) => {
  return (
    <ScrollView style ={styles.container}>
      <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 25, paddingLeft: 80, paddingTop: 20}}>  Wales Countryside drive </Text>
      <Image style = {styles.top}
        source ={require('../../assets/Walesdrive.png')}>
    </Image>
    <View style = {styles.showDetailcontainer}>
     <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold', }}>Start date and time </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 8, }}> 1st May 2022 </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingBottom: 8, }}> 7:00 PM </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold',}}>End date and time </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 8, }}> 1st May 2022 </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingBottom: 8, }}> 20:00 PM </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold',}}>Location </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 8}}> Snowdon </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingBottom: 8}}> LL41 </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 67, paddingTop: 20 ,fontWeight: 'bold',}}>Cars required to attend</Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 85, paddingTop: 15, paddingBottom: 8}}> Bring whatever you Like</Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold',}}>People attending </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 5, paddingBottom: 8}}> 300 people attending </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingBottom: 8}}> 500 people intersted </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 67, paddingTop: 20 ,fontWeight: 'bold',}}>Weather </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 85, paddingTop: 10, paddingBottom: 8}}> Clear </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold',}}>Neareast Fuel station </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 8}}> Texaco </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15,  paddingBottom: 8}}> 3.8 miles </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 45, paddingTop: 20 ,fontWeight: 'bold',}}>Cost </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 45, paddingTop: 5, paddingBottom: 8}}> Fuel - £180.00 </Text>
    </View>
    

    
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      flex: 1,
  },
    top: { 
      height: '40%',
      width: '100%',
      marginTop: 20,
    },

    
    details: {
      paddingTop: 20, 
      
    },
    showDetailcontainer:{
        flexDirection:'row',
        flexWrap: 'wrap'
    }


})

export default Wales