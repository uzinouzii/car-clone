import { View, Text,StyleSheet, TouchableOpacity, Image , Animated} from 'react-native'
import React, {useRef, useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
import LottieView from 'lottie-react-native';

const Clubs = () => {
  const progress = useRef(new Animated.Value(0)).current;
const [hasLiked, setHasLiked] = useState(true);


    const handleLikeAnimation = () => {
        const newValue = hasLiked ? 0 : 3;
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
          <Text style = {styles.text}>Clubs for you</Text>
        </View>
      
    
    <View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source= {{uri: 'https://images.unsplash.com/photo-1528597469186-bddab681a37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Germans Cars</Text>
        <Text style={styles.text2}> For German car lovers, share photos, news and German cars related contents</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1619925840813-da56acb9e26e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}   
                autoPlay ={false}
                loop={false}         
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Classics club</Text>
        <Text style={styles.text2}> For Classic car lovers, share photos, news and Classic cars related contents</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1580427331730-b38f8dc1f355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>JDM Club</Text>
        <Text style={styles.text2}> For Japanese car lovers, share photos, news and JDM cars related contents</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1609358781127-bc382d52ae49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>American Muscle</Text>
        <Text style={styles.text2}> For American Muscle car lovers, share photos, news and American Muscle related contents</Text>
</View>


<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1633768428672-e735fbeba2da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Modified Club</Text>
        <Text style={styles.text2}> For Modified car lovers, share photos, news and Modified related contents</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1510596713412-56030de252c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Drives and Cruises</Text>
        <Text style={styles.text2}> Find local drives and cruises around you</Text>
</View>



</View>
)
}
const styles = StyleSheet.create({
container: {
   width: '100%',
   height: '100%', 
   padding: 7,
   flexDirection: 'row', 
   flexWrap: 'wrap',
   backgroundColor: 'black',
   paddingBottom: 20
   
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


  
},


box: {
   width: '50%',
   height: '27%',
   padding: 32,
   paddingLeft: 10 

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
   paddingTop: 3,
   alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: 14
},

text2 : {
    color: 'white',
   paddingTop: 5,
   alignItems: 'center',
  justifyContent: 'center',
  fontSize: 9.5
}

})
export default Clubs