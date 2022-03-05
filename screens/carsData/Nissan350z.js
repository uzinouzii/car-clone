import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Mustang = () => {
  return (
    <ScrollView style ={styles.container}>
      <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 25, paddingLeft: 140, paddingTop: 20}}>  Car Details  </Text>
      <Image style = {styles.top}
        source ={require('../../assets/Nissan350z.png')}>
    </Image>
     <View>
       <Text style = {{color: 'white', fontSize: 20, paddingLeft: 20, paddingTop: 20}}>Nissan 350z </Text>
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
    <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 20}}>Nissan 350z in detail</Text>
    <Text style = {{color: 'white', fontWeight: 'bold', paddingTop: 15}}>Performance and 0-60 time  </Text>
    <Text style = {{color: 'white', fontSize: 15, paddingTop: 15}}> The current 350Z has long been an favourite. It looks the part, sounds great, steers well and has enough power to jump from zero to 60mph in under 6 seconds. It has certainly done its bit to keep the 37-year-old Z legend alive, with more than 200,000 sales around the globe. </Text>
    <Text style = {{color: 'white', fontWeight: 'bold', paddingTop: 15}}> Engine and gearbox  </Text>
    <Text style = {{color: 'white', fontSize: 15, paddingTop: 15}}> Its ‘VQ’ 3.5-litre V6 has kept racking up the engine awards, winning America’s Wards gong every year since the turn of the century. With its new power unit, the mildly facelifted 350Z pumps out a healthy 313bhp at 6800rpm, up from 296bhp at 6400, while peak torque rises a smidge to 264lb ft at 4800rpm</Text>
    <Text style = {{color: 'white', fontWeight: 'bold', paddingTop: 15}}>  MPG and running costs </Text>
    <Text style = {{color: 'white', fontSize: 15, paddingTop: 15}}> Now with a 3.5 Liter v6, the MPG is sitting at 24.8mpg </Text>
    </View>

    <View style = {styles.facts}> 
    <Text style = {{color: 'white', paddingTop: 5}}>Price - From £20,000</Text>
    <Text style = {{color: 'white', paddingTop: 5}}>Pros - New engine makes Z even greater</Text>
    <Text style = {{color: 'white', paddingTop: 5}}>Cons - Mildly disappointing ‘facelift’</Text>
    <Text style = {{color: 'white', paddingTop: 15}}>THIS APP NAME ratings - 9/10</Text>
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

export default Mustang