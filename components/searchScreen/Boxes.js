import { View, Text, StyleSheet, Image, Animated } from 'react-native'
import React, {useRef, useState} from 'react'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import LottieView from 'lottie-react-native';

const Boxes = ({navigation}) => {
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
        <View style ={styles.box}>

                <Text style={{color: 'white'}}>BMW M4</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Bmw')}>
                            <Image
                                style ={styles.image}
                                source={require('../../assets/bmw.png')}/>
                            
                     </TouchableOpacity>
                
           
        </View>

        <View style ={styles.box}>
        <Text style={{color: 'white'}}>350 z</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Nissan350z')}>
        <Image
            style ={styles.image}
            source={require('../../assets/Nissan350z.png')}/>
        </TouchableOpacity>
         
                
        </View>

        <View style ={styles.box}>
        <Text style={{color: 'white'}}> Charger </Text>
        <TouchableOpacity onPress={() => navigation.navigate('DodgeCharger')}>
        <Image
            style ={styles.image}
            source={require('../../assets/Dodgecharger.png')}/>
        </TouchableOpacity>
          
        </View>

        <View style ={styles.box}>
        <Text style={{color: 'white'}}>RS 3</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Audirs3')}>
        <Image
            style ={styles.image}
            source={require('../../assets/RS3.png')}/>
        </TouchableOpacity>
          
        </View>

        <View style ={styles.box}>
        <Text style={{color: 'white'}}>Golf r</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Golfr')}>
        <Image
            style ={styles.image}
            source={require('../../assets/Golfr.png')}/>
        </TouchableOpacity>
          
        </View>

        <View style ={styles.box}>
        <Text style={{color: 'white'}}>Hurican</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Lambo')}>
        <Image
            style ={styles.image}
            source={require('../../assets/lamboHurican.png')}/>
        </TouchableOpacity>
           
        </View>
        <View style ={styles.box}>
        <Text style={{color: 'white'}}>Porsche 911</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Porsche')}>
        <Image
            style ={styles.image}
            source={require('../../assets/Porsche911.png')}/>
        </TouchableOpacity>
          
        </View>

         <View style ={styles.box}>
        <Text style={{color: 'white'}}> Skyline </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Skyline')}>
        <Image
            style ={styles.image}
            source={require('../../assets/Skyline.png')}/>
        </TouchableOpacity>
          
        </View>

        <View style ={styles.box}>
        <Text style={{color: 'white'}}>Type r</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HondaCivic')}>
        <Image
            style ={styles.image}
            source={require('../../assets/Typer.png')}/>
        </TouchableOpacity>
        </View>
        </View>

        
    
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
    
    },

    buttons: {
        width: 50,
        height: 50
    },

    box: {
        width: '30%',
        height: '34%',
        padding: 12
    },
   
    image: {
        width: '118%',
        height: '100%',
        opacity: 0.9,
        borderColor: 'black',
        borderWidth: 3,
        padding: 15,
    },
   
})

export default Boxes