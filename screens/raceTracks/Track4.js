import {  View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'

const Track4 = ({navigation}) => {
  return (
    <ScrollView style ={styles.container}>
    <View >
      <Text style = {styles.text}>Goodwood </Text>
      <Text style = {styles.text2}>Once graced by the likes of the late Sir Stirling Moss, Goodwood Motor Circuit is one of the most famous circuits in British racing history. Goodwood was revived as a circuit in 1998, and is currently in operation for track days and vehicle / performance testing. The circuit is just nearly 2.5 miles long, with higher speed bends and straights than multiple chicanes, perfect for the Own Car and Bike Track Days we have available to book here.

Even on name alone, 'Glorious' Goodwood evokes a fond heritage and nostalgia of British motorsport from a golden age. Every year, they host their much loved Festival of Speed event, attracting motor enthusiasts from all around the UK. Goodwood is also one of our venues for a range of exciting Supercar and Racing Car driving experience packages, offering the chance to drive some of the most desirable marques and pole position victors around.</Text>
      <Text style = {styles.text}>Goodwood Noise Limits</Text>
      <Text style = {styles.text2}>The track day noise limits at Goodwood usually depend on the number of cars/vehicles that are running. For events with no more than 5 cars running Circuit at any one time, the static limit can be up to 105dB(A) and drive-by 101dB(A) at approximately 10m on-track. For more vehicles than the limits drop to 98 and 96 respectively. Before every track day at Goodwood, there will be a static noise test at 0.5m from exhaust and 3/4 of max revs. The drive-by limits are measured at a distance of approx. 10 metres from the track. Please check the specific noise limit for the event before booking as it is subject to change.</Text>
      <Text style = {styles.text}>Goodwood Corners</Text>
        <Text style = {styles.text3}>Full Circuit (from starting grid clockwise) </Text>

        <FlatList 
          data = {[
            {key: 'Madgwick Corner '},
            {key: 'Fordwater'},
            {key: 'St Mary’s'},
            {key: 'Lavant Corner'},
            {key: 'Woodcote'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />

            <Text style = {styles.direction}>Goodwood Directions</Text>

            <Text style = {styles.address}>
            Goodwood
            Goodwood Motor Circuit
            Chichester, West Sussex PO18 0PH
            United Kingdom
              </Text>
              <Text style = {styles.text2}> If travelling by car, please use the following address for your Sat Nav: Goodwood, Goodwood Motor Circuit, Chichester, West Sussex, PO18 0PH, following the M3 motorway and the A27. If travelling by train, your nearest station is Chichester, and a taxi takes around 10 minutes from the station.</Text>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20, 
    marginTop: 35,
    fontWeight: 'bold',
    paddingLeft: 5
},
container: {
    height: '100%',
    backgroundColor: 'black',
    flex: 1
},

text2: {
  fontSize: 13,
  color: 'white',
  paddingTop: 20,
  paddingLeft: 8,
  paddingRight: 7
}, 
item: {
  fontSize: 14,
  color: 'white',
  padding : 5,
  paddingTop: 6,
  paddingLeft: 15
},
text3: {
  color: 'white',
    fontSize: 14, 
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 5
},

direction: {
  color: 'white',
    fontSize: 20, 
    marginTop: 35,
    fontWeight: 'bold',
    paddingLeft: 50,
    justifyContent: 'center',
    alignItems: 'center'
},

address: {
  fontSize: 15,
  color: 'white',
  paddingTop: 20,
  paddingLeft: 8,
  paddingRight: 7
}
})

export default Track4