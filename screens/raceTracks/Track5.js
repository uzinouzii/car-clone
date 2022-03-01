import {  View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'

const Track5 = ({navigation}) => {
  return (
    <ScrollView style ={styles.container}>
    <View >
      <Text style = {styles.text}>Silverstone </Text>
      <Text style = {styles.text2}>Built on an old military airport in 1948, Silverstone was a high-speed track with long straights and quick curves. Throughout the years the track layout has undergone several changes but retained most of its character. There are in fact 4 different layouts of the circuit at Silverstone, including a new GP Circuit, National, International and Stowe Circuit. With a combination of ultra fast corners, long straights and some slow sections, Silverstone represents a good challenge to any driver or rider. Silverstone, just like most of the other race circuits in the UK is another airfield conversion. Racing commenced in 1948 on the old perimeter track and runways and has continued to the current day. Silverstone has been the UK's top international car racing venue for much of the last twenty years, but until the last couple of years held no motorcycle races. Silverstone is the most famous race circuit in the UK at present, holding prestigious races like the Formula 1 Grand Prix and The World SuperBike Championship. A number of Formula 1 race teams are based close to the circuit in Northamptonshire. Anyone with a licence can do a track day at Silverstone. The Bike track days and Silverstone Car track days are open to anyone with a roadworthy vehicle.</Text>
      <Text style = {styles.text}>Silverstone Track Day Noise Limits</Text>
      <Text style = {styles.text2}>The Silverstone noise limit is usually based around a drive-by/ride-by limit of 102dB(A) but during an event, if a vehicle fails this limit they will be required to pass a 105db(A) static noise test at 0.5m at a 45-degree angle with the engine running at 3/4maximum revs.</Text>
      <Text style = {styles.text}>Silverstone Corners</Text>
      <Text style = {styles.text3}>Grand Prix Circuit (from starting grid clockwise)

</Text>
        <FlatList 
          data = {[
            {key: 'Copse'},
            {key: 'Maggotts'},
            {key: 'Becketts'},
            {key: 'Chapel Curve'},
            {key: 'Hangar Straight'},
            {key: 'Stowe'},
            {key: 'Vale'},
            {key: 'Club'},
            {key: 'Abbey'},
            {key: 'Farm Curve'},
            {key: 'Village'},
            {key: 'The Loop'},
            {key: 'North Circuit'},
            {key: 'South Straight'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />
        <Text style = {styles.text3}>National Circuit (from starting grid clockwise) </Text>

        <FlatList 
          data = {[
            {key: 'Copse'},
            {key: 'Maggotts'},
            {key: 'Becketts'},
            {key: 'Chapel Curve'},
            {key: 'Hangar Straight'},
            {key: 'Stowe'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />

            <Text style = {styles.direction}>Silverstone Directions</Text>

            <Text style = {styles.address}>
            Silverstone
            Silverstone Circuit
            Towcester, Northants, Northamptonshire NN12 8TN
            United Kingdom
              </Text>
              <Text style = {styles.text2}>If travelling by car, use the following address for your Sat Nav: Silverstone, Silverstone Circuit, Towcester, Northants, Northamptonshire, NN12 8TN, following the A43, exiting at the junction for the A413 and Brackley Road. If travelling by train, the nearest station is Kings Sutton, and a taxi takes just under 25 minutes from the station.</Text>
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

export default Track5