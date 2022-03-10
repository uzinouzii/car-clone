import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { makeStyles } from 'react-native-elements'

const MenuItem = () => {
  return (
    <ScrollView>
    <View style = {styles.top}>
    <TouchableOpacity onPress={() => navigation.navigate('RegentStreetshow')}>
    <Image source = {require('../../assets/RSmotorshow.png')} style = {styles.image} />
    </TouchableOpacity>
    <View style = {styles.view}>
      <TouchableOpacity onPress={() => navigation.navigate('RegentStreetshow')}>
      <Image source = {require('../../assets/RSmotorshow.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Centraldrive')}>
      <Image source = {require('../../assets/Centraldrive.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Classics')}>
      <Image source = {require('../../assets/Classicsmeet.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('German')}>
      <Image source = {require('../../assets/Germanmeet.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Jap')}>
      <Image source = {require('../../assets/Japmeet.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Wales')}>
      <Image source = {require('../../assets/Walesdrive.png')} />
      </TouchableOpacity>
    </View>
    <View style = {styles.bottom}>
        
          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
              <Text style= {styles.bottomtext}> Post </Text>
              </TouchableOpacity>
            </View>
            
          
        
      </View>

      
          <View style ={styles.bottomItem}>
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
              <Text style= {styles.bottomtext}> CAR IMAGE </Text>
              </TouchableOpacity>
            </View>
  
          </View>
          

          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
              <Text style= {styles.bottomtext}> CAR IMAGE </Text>
              </TouchableOpacity>
            </View>
            
          </View>

          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
              <Text style= {styles.bottomtext}> CAR PART </Text>
              </TouchableOpacity>
            </View>
            
          </View>

          <View style ={styles.bottomItem}>
          
          <View style ={styles.bottomIteminner}>
          <TouchableOpacity >
            <Text style= {styles.bottomtext}> CAR PART </Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style ={styles.bottomItem}>
          
          <View style ={styles.bottomIteminner}>
          <TouchableOpacity >
            <Text style= {styles.bottomtext}> CAR  </Text>
            </TouchableOpacity>
          </View>
          
        </View>


        <View style ={styles.bottomItem}>
          
          <View style ={styles.bottomIteminner}>
          <TouchableOpacity >
            <Text style= {styles.bottomtext}> CAR </Text>
            </TouchableOpacity>
          </View>
          
        </View>


        <View style ={styles.bottomItem}>
          
          <View style ={styles.bottomIteminner}>
          <TouchableOpacity >
            <Text style= {styles.bottomtext}> CAR </Text>
            </TouchableOpacity>
          </View>
          
        </View>


        <View style ={styles.bottomItem}>
          
          <View style ={styles.bottomIteminner}>
          <TouchableOpacity >
            <Text style= {styles.bottomtext}> CARPART </Text>
            </TouchableOpacity>
          </View>
          
        </View>

         

          </View>
        
    </View>
 
    </ScrollView>
)
}

const styles = StyleSheet.create({

menuitem: {
  width: '100%', 
  height: '40%', 
  paddingRight: 30,
  flexDirection: 'row',
  
 
},
view: {
flexDirection: 'row',
paddingTop: 15,


},
top: { 
  height: '35%',
  paddingTop: '5%',
  paddingLeft: '2%',
  backgroundColor: 'black'
}, 
text: {
  color: 'black', 
  flexDirection: 'row',
  flex: 1
}, 
center: {
  height: '5%',
  backgroundColor: 'brown'
}, 
bottom: {
  height: '39%',
  width: '100%',
  backgroundColor: '#383838',
  flexDirection: 'row', 
  flexWrap: 'wrap',
  padding: 5,
  flex: 1
}, 
bottomItem: {
  width: '100%', 
  height: '11.8%',
  padding: 5
}, 

bottomIteminner: {
  flex: 1,
  backgroundColor: '#292929'
}, 
bottomtext: {
  color: 'black',
  fontSize: 20, 
  textAlign: 'center',
  paddingTop: 75
}, 

image: {
  width: '99%',
  height: '50%',
  paddingTop: '45%'
}
})





export default MenuItem