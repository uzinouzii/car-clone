import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { makeStyles } from 'react-native-elements'

const MenuItem = () => {
  return (
    <ScrollView>
    <View style = {styles.top}>
      <Text style = {{color: 'white', fontSize: 15, paddingBottom: 5, fontWeight: 'bold'}}> Find Tyre shops</Text>
    <TouchableOpacity onPress={() => navigation.navigate('RegentStreetshow')}>
    <Image source = {{uri: 'https://images.unsplash.com/photo-1599082267768-4815b2ea6bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}} style = {styles.image} />
    </TouchableOpacity>
    <View >
    <Text style = {{color: 'white', fontSize: 15, paddingBottom: 10, paddingTop: 5, fontWeight: 'bold'}}> Scroll to find shops near you</Text>
      <ScrollView style ={styles.scroll}>
      <TouchableOpacity onPress={() => navigation.navigate('RegentStreetshow')}>
      <Image source = {require('../../assets/carcare.png')}
      style = {{ paddingBottom: 20}} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Centraldrive')}>
      <Image source = {require('../../assets/mercury.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Classics')}>
      <Image source = {require('../../assets/fastlane.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('German')}>
      <Image source = {require('../../assets/knightracer.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Jap')}>
      <Image source = {require('../../assets/certi.png')} />
      </TouchableOpacity>
      </ScrollView>
      </View>
    <View style = {styles.bottom}>
        
          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/porsche4sale.jpg')} style ={styles.btmimage} />
              </TouchableOpacity>
            </View>
            
            
      <View style = {styles.center}>
            <Text style= {styles.text1}>2019 Porsche 911 </Text>
            <Text style= {styles.text11}>Price: £65,000 </Text>
            <Text style= {styles.text11}>Mileage: 25,000 </Text>
            <Text style= {styles.text11}>Location: London </Text>
      </View>
          
        
      </View>

      
          <View style ={styles.bottomItem}>
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/minicooper.jpg')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>

      <View style = {styles.center}>
            <Text style= {styles.text1}>2020 Mini cooper</Text>
            <Text style= {styles.text11}>Price: £15,000</Text>
            <Text style= {styles.text11}>Mileage: 10,000</Text>
            <Text style= {styles.text11}>Location: Birmingham </Text>
      </View>
          
  
          </View>
          

         
          <View style ={styles.bottomItem}>
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/fordfocus.jpg')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>

      <View style = {styles.center}>
            <Text style= {styles.text1}>2018 Ford focus Rs </Text>
            <Text style= {styles.text11}>Price: £25,000 </Text>
            <Text style= {styles.text11}>Mileage:25,000 </Text>
            <Text style= {styles.text11}>Location: Cardiff </Text>
      </View>
  
          </View>

          
          <View style ={styles.bottomItem}>
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/workwheels.png')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>

      <View style = {styles.center}>
            <Text style= {styles.text1}>Genuine Work wheels </Text>
            <Text style= {styles.text11}>Price: £3000 </Text>
      </View>
  
          </View>

         
          <View style ={styles.bottomItem}>
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/turbo.jpg')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>

      <View style = {styles.center}>
            <Text style= {styles.text1}>Gareet GTX3560R Turbo </Text>
            <Text style= {styles.text11}>Price: £700 </Text>
      </View>
  
          </View>

       
          <View style ={styles.bottomItem}>
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/e36bumper.jpg')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>

      <View style = {styles.center}>
            <Text style= {styles.text1}>BMW E36 Bumper  </Text>
            <Text style= {styles.text11}>Price: £250 </Text>
      </View>
  
          </View>


       
          <View style ={styles.bottomItem}>
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/nissan200sx.png')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>

      <View style = {styles.center}>
            <Text style= {styles.text1}>1992 Nissan 200sx</Text>
            <Text style= {styles.text11}>Price: £20,000 </Text>
            <Text style= {styles.text11}>Mileage: 95,000 </Text>
            <Text style= {styles.text11}>Location: Manchester </Text>
      </View>
  
          </View>
          </View>
        
    </View>
 
    </ScrollView>
)
}

const styles = StyleSheet.create({

view: {
flexDirection: 'row',
flexWrap: 'wrap',


},

text: {
  color: 'white',
  paddingTop: 1,
  fontSize: 9,
  fontWeight: 'bold',
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingLeft: 10
  
},

text1: {
   color: 'white',
   fontSize: 14,
   paddingRight: 70,
   paddingTop: 7,
}, 

text11: {

  color: 'white',
  fontSize: 12,
  paddingTop: 1,

},
text2: {
  color: 'white',
  paddingTop: 25,
  fontSize: 9,
  flexDirection: 'row',
  flexWrap: 'wrap',
},



scroll : {
  flexDirection: 'row',
  flexWrap: 'wrap',
  height: '95%'
},

top: { 
  height: '10%',
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
  height: '10%',
  backgroundColor: 'black',
  paddingLeft: 5,
  
}, 
bottom: {
  height: 550,
  width: '100%',
  flexDirection: 'row', 
  flexWrap: 'wrap',
  padding: 5,
  flex: 1
}, 
bottomItem: {
  width: '110%', 
  height: '47%',
  padding: 10,
  paddingTop: 30,
  
}, 

btmimage: {
  width: '42%', 
  height: '100%',
  marginTop: 10,
  paddingBottom: 20,
},

bottomIteminner: {
  flex: 1,
  
}, 
bottomtext: {
  color: 'black',
  fontSize: 20, 
  textAlign: 'center',
  paddingTop: 75
}, 

image: {
  width: '99%',
  height: '45%',
  paddingTop: '45%'
}
})





export default MenuItem