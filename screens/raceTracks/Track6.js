import {  View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'

const Track6 = ({navigation}) => {
  return (
    <ScrollView style ={styles.container}>
    <View >
      <Text style = {styles.text}>Thruxton </Text>
      <Text style = {styles.text2}>Thruxton Race Circuit is one of the fastest in the country, with legendary high-speed corners and a reputation as a place where circuit drivers can really test their skills. It lays claim to being one of the longest in the UK, at 2.4 miles per lap. Both track days and driving experiences are available to book here.Thruxton, like many other circuits around the UK, was originally an old airfield, used during WWII. The airfield opened as a race track in 1950, both the runways and perimeter roads were used for the track.
        Thruxton track days are great to put your car through its paces. Note however that all Thruxton track days are run with a relatively quiet noise limit in place that all vehicles must comply to. Before any event, there will be a static noise test and the vehicle must be under 90db(A). The test is done at 0.5 meters from the exhaust outlet at 3/4 max revs. Although Thruxton holds race meetings, it is one of the quietest race circuits in the UK so please check your vehicle is suitable before booking a track day.</Text>
      <Text style = {styles.text}>Thruxton Track Day Noise Limit</Text>
      <Text style = {styles.text2}>Thruxton track days are great to put your car through its paces. Note however that all Thruxton track days are run with a relatively quiet noise limit in place that all vehicles must comply to. Before any event, there will be a static noise test and the vehicle must be under 90db(A). The test is done at 0.5 meters from the exhaust outlet at 3/4 max revs. Although Thruxton holds race meetings, it is one of the quietest race circuits in the UK so please check your vehicle is suitable before booking a track day.</Text>
      <Text style = {styles.text}>Thruxton Corners</Text>
      <Text style = {styles.text3}>Full Circuit (from starting grid clockwise) </Text>
        <FlatList 
          data = {[
            {key: 'Allard'},
            {key: 'Campbelln'},
            {key: 'Campbell'},
            {key: 'Seagrave'},
            {key: 'Noble'},
            {key: 'Goodwood'},
            {key: 'Village'},
            {key: 'Church'},
            {key: 'East Hairpin'},
            {key: 'North Circuit'},
            {key: 'South Straight'},
          ]}
            renderItem ={({item})=> <Text style={styles.item}>{item.key}</Text>}
            />
        

            <Text style = {styles.direction}>Thruxton Directions</Text>

            <Text style = {styles.address}>
            Thruxton
            Thruxton Circuit
            Andover, Hampshire SP11 8PW
            United Kingdom
              </Text>
              <Text style = {styles.text2}> If travelling by car, use the following address for your Sat Nav: Thruxton, Thruxton Circuit, Andover, Hampshire, SP11 8PW, following the A303. If travelling by train, the nearest station is Andover, and a taxi takes just over 10 minutes from the station.</Text>
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

export default Track6