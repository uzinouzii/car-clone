import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const DodgeCharger = () => {
  return (
    <ScrollView style ={styles.container}>
      <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 25, paddingLeft: 140, paddingTop: 20}}>  Car Details  </Text>
      <Image style = {styles.top}
        source ={require('../../assets/Dodgecharger.png')}>
    </Image>
     <View>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 20, paddingTop: 20}}>Dodge Charger </Text>
       <Text style = {{color: 'white', fontSize: 15, paddingLeft: 5, paddingTop: 15, paddingBottom: 8}}> Owners </Text>
     </View>
     <View style = {{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={require('../../assets/bmw.png')} style={styles.story}/>
      <Image source={require('../../assets/bmw.png')} style={styles.story}/>
      <Image source={require('../../assets/bmw.png')} style={styles.story}/>
      <Image source={require('../../assets/bmw.png')} style={styles.story}/>
      <Image source={require('../../assets/bmw.png')} style={styles.story}/>
      <Image source={require('../../assets/bmw.png')} style={styles.story}/>
      <Image source={require('../../assets/bmw.png')} style={styles.story}/>
      <Image source={require('../../assets/bmw.png')} style={styles.story}/>
      <Image source={require('../../assets/bmw.png')} style={styles.story}/>
    </View>
    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
    <Text style = {{color: 'white', paddingTop: 5, paddingLeft: 10}}>James</Text>
    <Text style = {{color: 'white', paddingTop: 5, paddingLeft: 18}}>James</Text>
    <Text style = {{color: 'white', paddingTop: 5, paddingLeft: 18}}>James</Text>
    <Text style = {{color: 'white', paddingTop: 5, paddingLeft: 18}}>James</Text>
    <Text style = {{color: 'white', paddingTop: 5, paddingLeft: 18}}>James</Text>
    <Text style = {{color: 'white', paddingTop: 5, paddingLeft: 18}}>James</Text>
    <Text style = {{color: 'white', paddingTop: 5, paddingLeft: 18}}>James</Text>
    <Text style = {{color: 'white', paddingTop: 5, paddingLeft: 18}}>James</Text>
    <Text style = {{color: 'white', paddingTop: 5, paddingLeft: 18}}>James</Text>
    </View>

    <View style = {styles.details}>
    <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 20}}>Dodge Charger in detail</Text>
    <Text style = {{color: 'white', fontWeight: 'bold', paddingTop: 15}}>Performance and 0-60 time  </Text>
    <Text style = {{color: 'white', fontSize: 15, paddingTop: 15}}> The Dodge charger offers a magnificent 0 to 50 acceleration speed of 6.4 seconds.</Text>
    <Text style = {{color: 'white', fontWeight: 'bold', paddingTop: 15}}> Engine and gearbox  </Text>
    <Text style = {{color: 'white', fontSize: 15, paddingTop: 15}}> 6.2 L, 16 Valve V-8 supercharged and intercooled pushrod with 16-valve, iron block and aluminum heads, port fuel injection offers a power of 797hp @6300 rpm with a torque of 707 lb-ft</Text>
    <Text style = {{color: 'white', fontWeight: 'bold', paddingTop: 15}}>  MPG and running costs </Text>
    <Text style = {{color: 'white', fontSize: 15, paddingTop: 15}}>For a big engine muslce car, The Dodge charger provides a estiated 19 MPG city/ 30 MPG highway which is fair for a heavy muscle car.</Text>
    </View>

    <View style = {styles.facts}> 
    <Text style = {{color: 'white', paddingTop: 5}}>Price - From £90,000</Text>
    <Text style = {{color: 'white', paddingTop: 5}}>Pros - Power and handling is magnificent</Text>
    <Text style = {{color: 'white', paddingTop: 5}}>Cons - Very poor MPG</Text>
    <Text style = {{color: 'white', paddingTop: 15}}>THIS APP NAME ratings - 8/10</Text>
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
      height: '25%',
      width: '100%',
      marginTop: 20,
    },
    story: {
      width: 55,
      height: 55,
      borderRadius: 50,
      marginLeft:6,
      borderWidth: 1.6,
      borderColor: '#ff9501',
      justifyContent: 'space-between'
    },

    facts: {
      paddingTop: 20, 
   
    },

    details: {
      paddingTop: 20, 
      
    }

})

export default DodgeCharger