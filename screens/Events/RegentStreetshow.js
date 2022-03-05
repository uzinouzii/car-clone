import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
const RegentStreetshow = ({navigation}) => {
  return (
    <ScrollView style ={styles.container}>
      <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 25, paddingLeft: 80, paddingTop: 20}}> RegentStreet car show  </Text>
      <Image style = {styles.top}
        source ={require('../../assets/RSmotorshow.png')}>
    </Image>
    <View style = {styles.showDetailcontainer}>
     <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold', }}>Start date and time </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 8, }}> 15th April 2022 </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingBottom: 8, }}> 12:00 PM </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold',}}>End date and time </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 8, }}> 15th April 2022 </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingBottom: 8, }}> 18:00 PM </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold',}}>Location </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 8}}> Regent Street </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingBottom: 8}}> W1B 3AB </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 67, paddingTop: 20 ,fontWeight: 'bold',}}>Cars required to attend</Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 85, paddingTop: 15, paddingBottom: 8}}> Bring whatever you Like</Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold',}}>People attending </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 5, paddingBottom: 8}}> 2000 people attending </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingBottom: 8}}> 3000 people intersted </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 67, paddingTop: 20 ,fontWeight: 'bold',}}>Weather </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 85, paddingTop: 10, paddingBottom: 8}}> Clear </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 10, paddingTop: 20 ,fontWeight: 'bold',}}>Neareast Fuel station </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15, paddingTop: 15, paddingBottom: 8}}> BP Garage </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 15,  paddingBottom: 8}}> 1.8 miles </Text>
    </View>

    <View style = {styles.showDetail}>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 45, paddingTop: 20 ,fontWeight: 'bold',}}>Cost </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 45, paddingTop: 5, paddingBottom: 8}}> £0.00 </Text>
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

export default RegentStreetshow