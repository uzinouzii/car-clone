import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
const Audirs3 = ({navigation}) => {
  return (
    <ScrollView style ={styles.container}>
      <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 25, paddingLeft: 140, paddingTop: 20}}>  Car Details  </Text>
      <Image style = {styles.top}
        source ={require('../../assets/RS3.png')}>
    </Image>
     <View> style = {{color: 'white', fontSize: 20, paddingLeft: 20, paddingTop: 20}}
       <Text>Audi RS3  </Text>
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
    <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 20}}>Audi RS3 in detail</Text>
    <Text style = {{color: 'white', fontWeight: 'bold', paddingTop: 15}}>Performance and 0-60 time  </Text>
    <Text style = {{color: 'white', fontSize: 15, paddingTop: 15}}>RS3 is was perhaps the only redeeming feature in dynamic terms and now it’s stronger than ever: 362bhp from 5550-6800rpm and 343lb ft from 1625-5550rpm. Combined with a reduction in weight of 55kg down to a more competitive 1595kg the RS3 can cover 0-62mph in 4.3-seconds and you can choose to raise the limiter from 155mph to 174mph.</Text>
    <Text style = {{color: 'white', fontWeight: 'bold', paddingTop: 15}}> Engine and gearbox  </Text>
    <Text style = {{color: 'white', fontSize: 15, paddingTop: 15}}> its 2.5-litre five-cylinder turbocharged engine produces 362bhp at 343lb ft from 1625-5550rpm. </Text>
    <Text style = {{color: 'white', fontWeight: 'bold', paddingTop: 15}}>  MPG and running costs </Text>
    <Text style = {{color: 'white', fontSize: 15, paddingTop: 15}}> Now with a turbocharged engine, the rs3 provides a combined of 30mpg.</Text>
    </View>

    <View style = {styles.facts}> 
    <Text style = {{color: 'white', paddingTop: 5}}>Price - From £50,900</Text>
    <Text style = {{color: 'white', paddingTop: 5}}>Pros - Chassis upgrades finally create a nimble and agile RS3</Text>
    <Text style = {{color: 'white', paddingTop: 5}}>Cons - Engine and gearbox feel out of date </Text>
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

export default Audirs3