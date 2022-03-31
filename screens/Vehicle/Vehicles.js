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
      <ScrollView style ={styles.maincontainer}>
    <View style ={styles.container}>
      <View style = {styles.header}>
          <Text style = {styles.text}>Vehicles for you</Text>
        </View>
      
    
    <View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1621142975990-084822936160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>2022 Toyota Supra</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1587020502175-293caac77390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Porsche 911</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1616647882383-d1b5fe8212c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Bmw e30</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Tesla</Text>
</View>


<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1563456162028-6704de5f0db4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Volkswagen Golf Gti</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1641331822107-e3742a71c211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Bmw F30 M3</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1620387982272-e206ac1be821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Subaru STI</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1627508821199-5b89ca68a40d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Audi RS3</Text>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1616617535619-55e3db07bd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Audi R8</Text>
</View>
<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://images.unsplash.com/photo-1626688416629-41536752cdc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/like.json')}            
                />
            </TouchableOpacity>
  
        <Text style={styles.text}>Bmw e36</Text>
</View>







</View>
</ScrollView>
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

maincontainer: {
    width: '100%',
    height: '100%', 
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


box: {
   width: '50%',
   height: '60%',
   padding: 14,
   paddingLeft: 15 

},

inner: {
   flex: 1,
},

image: {
   width: '100%', 
   height: '80%', 
   marginBottom: 5
   
}, 

text: {
   color: 'white',
   paddingTop: 2,
   fontSize: 13,
   fontWeight: 'bold'
}


})

export default Vehicles