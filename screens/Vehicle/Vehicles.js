import { View, Text,StyleSheet, TouchableOpacity, Image , Animated} from 'react-native'
import React, {useRef, useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
import LottieView from 'lottie-react-native';


const Vehicles = () => {
  const progress = useRef(new Animated.Value(0)).current;
const [hasLiked, setHasLiked] = useState(false);

    const handleLikeAnimation = () => {
        const newValue = hasLiked ? 0 : 1;
        Animated.timing(progress,{
            toValue: newValue,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        setHasLiked(!hasLiked)

    }
  return (
    <View style ={styles.container}>
      <View style = {styles.header}>
          <Text style = {styles.text}>Vehicles for you</Text>
        </View>
      
    
    <View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={require('../../assets/bedfordautodrome.jpg')}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Germans Cars</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={require('../../assets/bedfordautodrome.jpg')}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Classics club</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={require('../../assets/bedfordautodrome.jpg')}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>JDM Club</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={require('../../assets/bedfordautodrome.jpg')}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>American Muscle</Text>
</View>


<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={require('../../assets/bedfordautodrome.jpg')}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Modified Club</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={require('../../assets/bedfordautodrome.jpg')}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>BMW club</Text>
</View>



</View>
)
}
const styles = StyleSheet.create({
container: {
   width: '100%',
   height: '100%', 
   padding: 8,
   flexDirection: 'row', 
   flexWrap: 'wrap',
   backgroundColor: 'black'
   
},

buttons: {
  margin: 5,
  position: "absolute",
  top: 0,
  left: 0,
  width: '35%',
  height: '60%',
},
likebtn:{
  flexDirection: 'row',
  flexWrap: 'wrap',
  
  paddingRight: 50
},

header: {
  width: '100%',
  height: '15%',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 20

  
},

text: {
  color: 'white',
  fontSize: 20,
  
 
 
},

box: {
   width: '50%',
   height: '27%',
   padding: 30,
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

export default Vehicles