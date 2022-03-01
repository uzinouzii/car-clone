import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Tracks = ({navigation}) => {
  return (
    <View style ={styles.container}>
        <View style ={styles.box}>
            
            <TouchableOpacity  onPress={() => navigation.navigate('Track1')}>
                  <Image
                     style ={styles.image}
                     source={require('../../assets/bedfordautodrome.jpg')}/>
            </TouchableOpacity>
    
            <Text style={styles.text}>Bedford Autodrome</Text>
    </View>

   <View style ={styles.box}>
      <TouchableOpacity  onPress={() => navigation.navigate('Track2')}>
          <Image
               style ={styles.image}
               source={require('../../assets/brandshatch.jpg')}/>
      </TouchableOpacity>
               <Text style={styles.text}>Brands hatch</Text>
   </View>

   <View style ={styles.box}>
      <TouchableOpacity  onPress={() => navigation.navigate('Track3')}>
         <Image
            style ={styles.image}
            source={require('../../assets/doningtonpark.jpg')}/>
      </TouchableOpacity>
            <Text style={styles.text}> Donington Park</Text>  
   </View>
   
   <View style ={styles.box}>
      <TouchableOpacity  onPress={() => navigation.navigate('Track4')}>
         <Image
            style ={styles.image}
            source={require('../../assets/goodwood.jpg')}/>
      </TouchableOpacity>
            <Text style={styles.text}>Goodwood</Text>  
   </View>

   <View style ={styles.box}>
      <TouchableOpacity  onPress={() => navigation.navigate('Track5')}>
        <Image
           style ={styles.image}
           source={require('../../assets/silverstone.jpg')}/>
      </TouchableOpacity>
           <Text style={styles.text}>Silverstone</Text> 
   </View>

   <View style ={styles.box}>
   <TouchableOpacity  onPress={() => navigation.navigate('Track6')}>
      <Image
         style ={styles.image}
         source={require('../../assets/thruxton.jpg')}/>
   </TouchableOpacity>
         <Text style={styles.text}>Thruxton</Text>
   </View>
   </View>
  )
}
const styles = StyleSheet.create({
   container: {
       width: '100%',
       height: '55%', 
       padding: 5,
       flexDirection: 'row', 
       flexWrap: 'wrap'
       
   },

   box: {
       width: '50%',
       height: '50%',
       padding: 15,
       paddingLeft: 15 

   },

   inner: {
       flex: 1,
   },

   image: {
       width: '100%', 
       height: '100%', 
       
   }, 

   text: {
       color: 'white',
       paddingTop: 2
   }


   })
export default Tracks

