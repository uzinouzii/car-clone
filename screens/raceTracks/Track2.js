import { View, Text, StyleSheet, ScrollView, FlatList,Button } from 'react-native'
import React from 'react'

const Track2 = ({navigation}) => {
  return (
    <ScrollView style ={styles.container}>
    <View >
      <Text style = {styles.text}>Brands Hatch </Text>
      <Button title = 'Book Track now'/>
      <Text style = {styles.text2}>Brands Hatch is one of the most charismatic circuits in the UK, steeped in history and as a spectator venue, it is unsurpassed in what it can offer. The natural amphitheatre that is its 1.2 mile Indy configuration offers unparalleled views of the action, while its sensational Grand Prix circuit remains one of the biggest challenges in UK motor racing. Brands Hatch track days are very popular and booking early is advised.</Text>
      <Text style = {styles.text}>Brands Hatch Noise Limits</Text>
      <Text style = {styles.text2}>For Car and Bike track days at Brands Hatch, there are generally 2 sets of noise limits. Where the static test limit is 105dB(A) the drive by limit is 92dB(A). If the quieter level static limit is 102dB(A) then note that the drive-by will still be 92dB(A). The drive-by limit is measured at a distance of 20m at various parts of the track. On the calendar, we show the static noise limit as standard. You can click the event to check the drive-by limit.</Text>
      <Text style = {styles.text}>Brands Hatch Corners</Text>

      <Text style = {styles.text3}>Indy Circuit (from pitlane clockwise) </Text>
        <FlatList 
          data = {[
            {key: 'Paddock Hill Bend'},
            {key: 'Hailwoods Hill'},
            {key: 'Druids'},
            {key: 'Graham Hill Bend'},
            {key: 'Cooper Straight'},
            {key: 'Surtees'},
            {key: 'McLaren'},
            {key: 'Clearways'},
            {key: 'Clarke Curve'},
            {key: 'Brabham Straight'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />
        <Text style = {styles.text3}>GP Circuit (from Surtees clockwise) </Text>

        <FlatList 
          data = {[
            {key: 'Pilgrims Drop '},
            {key: 'Hawthorn Hill'},
            {key: 'Hawthorns'},
            {key: 'Bank Complex'},
            {key: 'Westfield'},
            {key: 'Dingle Dell'},
            {key: 'Sheene Curve'},
            {key: 'Stirlings'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />

            <Text style = {styles.direction}>Brands Hatch Directions</Text>

            <Text style = {styles.address}>
            Brands Hatch Circuit
            Fawkham
            West Kingsdown, Longfield, Kent DA3 8NG
            United Kingdom
              </Text>
              <Text style = {styles.text2}> If travelling by car, use the following address for your Sat Nav: Brands Hatch Circuit, Fawkham, Longfield, Kent, DA3 8NG, following the M25 and M20 motorways. If travelling by train, the nearest station is Swanley, and a taxi takes around 10 minutes from the station.</Text>
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

export default Track2