import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'


const clubsIMG = 'https://img.icons8.com/fluency/344/group.png'
const Car = 'https://cdn-icons.flaticon.com/png/512/1048/premium/1048313.png?token=exp=1645899750~hmac=74db414c5e3116bc44c936b9f871f8a6'
const user = 'https://cdn-icons-png.flaticon.com/512/1177/1177568.png'
const hashtag = 'https://cdn-icons.flaticon.com/png/512/5642/premium/5642069.png?token=exp=1645899923~hmac=37fa9be1b398fd2f1a2fdeb38055f1c2'

const Clubs = () => {
    return (
        <View style ={styles.container}>
        <View style ={styles.box}>
        <Text style={{color: 'white'}}> Clubs </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NewEvents')}>
                            <Image
                                style ={styles.image}
                                source={{uri: clubsIMG}}/>
                     </TouchableOpacity>
        </View>

        <View style ={styles.box}>
        <Text style={{color: 'white'}}> Vehicles </Text>
        <TouchableOpacity onPress={() => navigation.navigate('NewEvents')}>
        <Image
            style ={styles.image}
            source={{uri: Car}}/>
        </TouchableOpacity>
         
                
        </View>

        <View style ={styles.box}>
        <Text style={{color: 'white'}}> Users </Text>
        <TouchableOpacity onPress={() => navigation.navigate('NewEvents')}>
        <Image
            style ={styles.image}
            source={{uri: user}}/>
        </TouchableOpacity>
         
                
        

        
                
        </View>




      </View>
      
       
  )
}

const styles = StyleSheet.create({
    container: {
        width: '72%',
        height: '70%',
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        marginBottom: 250
    
    },

    box: {
        width: '40%',
        height: '78%',
        padding: 10
    },
   
    image: {
        width: '97%',
        height: '100%',
        opacity: 0.9,
        padding: 15
        
        
    }
})
    
        
export default Clubs
