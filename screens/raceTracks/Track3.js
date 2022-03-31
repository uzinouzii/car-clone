import {  View, Text, StyleSheet, ScrollView, FlatList,Button } from 'react-native'
import React from 'react'

const Track3 = ({navigation}) => {
  return (
    <ScrollView style ={styles.container}>
    <View >
      <Text style = {styles.text}>Donington Park </Text>
      <Button title = 'Book Track now'/>
      <Text style = {styles.text2}>Donington race track is a circuit of two halves - a very technical series of sweeping bends, followed by a series of short straights separated by slow corners. The section through Craner Curves and the Old Hairpin is a good place to experience the difference between world-class riders and the also-rans, and the Melbourne Hairpin is a favourite for last-minute out-braking action. The circuit variations include and National and Grand Prix layout on which you can take part in car and bike track days. These are run at various time throughout the year and are a great way to experience your vehicle on a real race circuit.</Text>
      <Text style = {styles.text}>Donington Park Noise Limits</Text>
      <Text style = {styles.text2}>For track days at Donington Park, there is usually no standard static test, only a drive-by. The drive-by noise limit is usually 98dB(A) but occasionally there will be a 'noisy' event where the limit is raised to 108dB(A).</Text>
      <Text style = {styles.text}>Donington Park Corners</Text>
      <Text style = {styles.text3}>Grand Prix Circuit (from starting grid clockwise) </Text>
        <FlatList 
          data = {[
            {key: 'Redgate'},
            {key: 'Hollywood'},
            {key: 'Craner Curves'},
            {key: 'Old Hairpin'},
            {key: 'Starkeys Bridge'},
            {key: 'Schwantz Curve'},
            {key: 'McLeans'},
            {key: 'Coppice'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />
        <Text style = {styles.text3}>National Circuit (from starting grid clockwise) </Text>

        <FlatList 
          data = {[
            {key: 'Roberts '},
            {key: 'Wheatcroft Straight'},
            {key: 'Redgate'},
            {key: 'Hollywood'},
            {key: 'Craner Curves'},
            {key: 'Old Hairpin'},
            {key: 'Starkeys Bridge'},
            {key: 'Schwantz Curve'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />

            <Text style = {styles.direction}>Donington Park Directions</Text>

            <Text style = {styles.address}>
            Donington Park
            Donington Park Circuit
            Castle Donington, Derby DE74 2RP
            United Kingdom
              </Text>
              <Text style = {styles.text2}> If travelling by car, use the following address for your Sat Nav: Donington Park, Donington Park Circuit, Castle Donington, Derby, DE74 2RP, following the A42 or the M1 motorway, exiting at Junction 23A. If travelling by train, the nearest station is Willington, and a taxi takes just under 20 minutes from the station.</Text>
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

export default Track3