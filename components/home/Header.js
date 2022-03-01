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
        <TouchableOpacity onPress={handleSignOut}>
            <Image style={styles.logo} source={require('../../assets/Sport-car.png')}/>
        </TouchableOpacity>

        <View style = {styles.iconsContainer}>
            <TouchableOpacity >
                <View style = {styles.unreadBadge}>
                   <Text style = {styles.unreadBadgeText}>1</Text> 
                </View>
                <Image style= {styles.icon} source= {require('../../assets/messages.png')}/>
            </TouchableOpacity>

            <Text style = {{color: 'white'}}> </Text>

            <View
                style={styles.line}>
</View>
            </View>

        </View>
    
  );
}

const styles = StyleSheet.create({
container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: '20',
    
},

iconsContainer: {
    flexDirection: 'row',
},

logo: {
    width: 130,
    height: 100,
    resizeMode: 'contain',
    },
icon: {
    width: 30, 
    height: 30,
    marginLeft: 20,
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