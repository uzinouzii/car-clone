import { View, Text,StyleSheet, TouchableOpacity, Image , Animated} from 'react-native'
import React, {useRef, useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
import LottieView from 'lottie-react-native';


const Users = () => {
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
          <Text style = {styles.headerText}>Suggested Users</Text>
        </View>
    <View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri:'https://randomuser.me/api/portraits/women/16.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
        <View style = {styles.center}>
            <Text style={styles.text}>@Kelly1</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>

      <View style = {styles.center}>
            <Text style= {styles.text1}>500</Text>
            <Text style= {styles.text11}>200</Text>
      </View>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri:'https://randomuser.me/api/portraits/women/17.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
  
        <View style = {styles.center}>
            <Text style={styles.text}>@mBMW</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>
      <View style = {styles.center}>
            <Text style= {styles.text1}>200</Text>
            <Text style= {styles.text11}>10</Text>
      </View>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri:'https://randomuser.me/api/portraits/women/92.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
  
        <View style = {styles.center}>
            <Text style={styles.text}>@Naz12</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>
      <View style = {styles.center}>
            <Text style= {styles.text1}>200</Text>
            <Text style= {styles.text11}>9</Text>
      </View>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri:'https://randomuser.me/api/portraits/men/21.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
  
        <View style = {styles.center}>
            <Text style={styles.text}>@Zino1</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>
      <View style = {styles.center}>
            <Text style= {styles.text1}>100</Text>
            <Text style= {styles.text11}>800</Text>
      </View>
</View>


<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://randomuser.me/api/portraits/men/93.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
  
        <View style = {styles.center}>
            <Text style={styles.text}>@Bmwp</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>
      <View style = {styles.center}>
            <Text style= {styles.text1}>100</Text>
            <Text style= {styles.text11}>800</Text>
      </View>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://randomuser.me/api/portraits/men/90.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
  
        <View style = {styles.center}>
            <Text style={styles.text}>@Kevin0</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>
      <View style = {styles.center}>
            <Text style= {styles.text1}>500</Text>
            <Text style= {styles.text11}>600</Text>
      </View>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://randomuser.me/api/portraits/men/2.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
  
        <View style = {styles.center}>
            <Text style={styles.text}>@K4GTI</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>
      <View style = {styles.center}>
            <Text style= {styles.text1}>900</Text>
            <Text style= {styles.text11}>80</Text>
      </View>
</View>

<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://randomuser.me/api/portraits/men/54.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
  
        <View style = {styles.center}>
            <Text style={styles.text}>@K24r</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>
      <View style = {styles.center}>
            <Text style= {styles.text1}>70</Text>
            <Text style= {styles.text11}>200</Text>
      </View>
</View>


<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://randomuser.me/api/portraits/men/92.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
  
        <View style = {styles.center}>
            <Text style={styles.text}>@RB26j</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>
      <View style = {styles.center}>
            <Text style= {styles.text1}>500</Text>
            <Text style= {styles.text11}>40</Text>
      </View>
</View>


<View style ={styles.box}>
              <Image
                 resizeMode='cover'
                 style ={styles.image}
                 source={{uri: 'https://randomuser.me/api/portraits/lego/3.jpg'}}/>
        <TouchableOpacity onPress ={handleLikeAnimation} style = {styles.buttons}>
            <LottieView progress={progress}
                source={require('../../assets/Lottie/heart.json')}            
                />
            </TouchableOpacity>
  
        <View style = {styles.center}>
            <Text style={styles.text}>@2jzshi</Text>
            <Text style= {styles.text}>Followers</Text>
            <Text style= {styles.text}>Following</Text>
      </View>
      <View style = {styles.center}>
            <Text style= {styles.text1}>500</Text>
            <Text style= {styles.text11}>200</Text>
      </View>
</View>
</View>
</ScrollView>
)
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 5,
        paddingLeft: 5,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        backgroundColor: 'black'
        
     },
center:{
     height: '13%',
     backgroundColor: 'black',
     flexDirection: 'row', 
     flexWrap: 'wrap',
     padding: 5
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
       width: '25%',
       height: '30%',
     },
     likebtn:{
       flexDirection: 'row',
       flexWrap: 'wrap',
       
       paddingRight: 50
     },
     
     header: {
       width: '100%',
       height: '18%',
       alignItems: 'center',
       justifyContent: 'center',
       paddingBottom: 20
     
       
     },
     
     
     box: {
        width: '50%',
        height: '40%',
        padding: 14,
        paddingLeft: 15 
     
     },
     
     inner: {
        flex: 1,
     },
     
     image: {
        width: '100%', 
        height: '60%', 
        marginBottom: 5
        
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
         paddingLeft: 68,
         color: 'white',
         fontSize: 10,
     }, 

     text11: {
        paddingLeft: 35,
        color: 'white',
        fontSize: 10,
     },
     text2: {
        color: 'white',
        paddingTop: 25,
        fontSize: 9,
        flexDirection: 'row',
        flexWrap: 'wrap',
     },
     
     headerText: {
        color: 'white',
        fontWeight: 'bold',
     }
     
     })
     

export default Users