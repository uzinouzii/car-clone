import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { firebase } from '../../firebase'

const handleSignOut = async () => {
try {
 await firebase.auth().signOut()
 console.log('Signed Out successfully!')
} catch (error) {
console.log(error)
}
}
const Header = ({navigation}) =>{
  return (
    <View style = {styles.container}>
            <Image style={styles.logo} source={require('../../assets/Applogo.png')}/>

        <View style = {styles.iconsContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('NewpostScreen')}>
                <Image style= {styles.icon} source= {{uri:'https://img.icons8.com/nolan/344/upload.png'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style = {styles.unreadBadge}>
                <Text 
                    style = {styles.unreadBadgeText}>5</Text> 
            </View>
                <Image 
                style= {styles.icon} 
                source= {require('../../assets/messages.png')}/>
        </TouchableOpacity>
            </View>
            </View>
        
    
  );
}

const styles = StyleSheet.create({
container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 21,
    
},

iconsContainer: {
    flexDirection: 'row',
    
},


logo: {
    width: 80,
    height: 90,
    resizeMode: 'contain',
    },
icon: {
    width: 35, 
    height: 45,
    marginLeft: 12,
    resizeMode: 'contain',
    

},

unreadBadge: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 20,
    bottom: 25,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
},

unreadBadgeText: {
    color: 'white',
    fontWeight: '600',

},

line: {
    borderWidth: 1,
    borderColor: "white",
     borderRadius: 50,
    },

})

export default Header