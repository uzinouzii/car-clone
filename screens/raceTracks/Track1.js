import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const Track1 = ({navigation}) => {
  return (
    <ScrollView style ={styles.container}>
    <View >
      <Text style = {styles.text}>Bedford Autodrome </Text>
      <Text style = {styles.text2}>A test track and proving ground converted for motorsport on a 400-acre former air force base. Excellent for car track days and has recently started to host open pitlane bike track days. Rebuilt in 1999 and owned by former racing driver Jonathan Palmer, Bedford Autodrome was designed for the enjoyment of high-performance road cars. As well as an excellently designed and challenging layout, it also has lots of runoff areas making it one of the safest track day circuits in the country.

For this reason, Bedford Autodrome track days are popular for novice drivers. The circuit has two layouts, the Grand Turismo, which is 4.1 miles long, and the SEN Circuit which is 2.3 miles long, both of which offer a challenge to all drivers of all levels of expertise.</Text>
      <Text style = {styles.text}>Bedford Autodrome Noise limits</Text>
      <Text style = {styles.text2}>The static noise limit at Bedford Autodrome is 101dB(A) and the drive-by limit is 87.5dB(A). On a Bedford Autodrome track day, all vehicles must pass the static noise limit to be permitted on the track. The drive-by limit is measured at a distance of approx 20m whilst vehicles are on track.</Text>
      <Text style = {styles.text}>Bedford Autodrome Corners</Text>
      <Text style = {styles.text3}>Gran Turismo Circuit (from starting grid clockwise) </Text>
        <FlatList 
          data = {[
            {key: 'West 1'},
            {key: 'Hairpin'},
            {key: 'West 2'},
            {key: 'West 3'},
            {key: 'West 4'},
            {key: 'West 5'},
            {key: 'West 6'},
            {key: 'Back Staright'},
            {key: 'West 7'},
            {key: 'West 8'},
            {key: 'South 1'},
            {key: 'East Hairpin'},
            {key: 'North Circuit'},
            {key: 'South Straight'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />
        <Text style = {styles.text3}>SEN Circuit (from starting grid clockwise) </Text>

        <FlatList 
          data = {[
            {key: 'Hangar Hairpin '},
            {key: 'Palmer Curves'},
            {key: 'Pif-Paf'},
            {key: 'Bank Complex'},
            {key: 'The Flick'},
            {key: 'Harrier 1'},
            {key: 'Harrier 2'},
            {key: 'Crab'},
            {key: 'O’Rouge Right'},
            {key: 'Tower'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />

            <Text style = {styles.direction}>Bedford Autodrome Directions</Text>

            <Text style = {styles.address}>
              Bedford Autodrome
              Thurleigh Airfield Business Park
              Thurleigh, Bedford, Bedfordshire MK44 2YP
              United Kingdom
              </Text>
              <Text style = {styles.text2}> If travelling by car, use the following address for your Sat Nav: Bedford Autodrome, Thurleigh Airfield Business Park, Thurleigh, Bedford, Bedfordshire, MK44 2YP, following the A6, from which you should exit at the Mill Lane roundabout for Thurleigh Road. If travelling by train, the nearest station is Bedford, and a taxi takes just over 10 minutes from the station.</Text>
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

export default Track1