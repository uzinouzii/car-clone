import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { firebase } from '../../firebase'
const handleSignOut = async () => {
  try {
   await firebase.auth().signOut()
   console.log('Signed Out successfully!')
  } catch (error) {
  console.log(error)
  }
  }

const Profilepage = () => {
  return (
    <View style ={styles.container}>
      <View style = {styles.top}>
        <View style = {styles.profileimage}>
        <Image style=
                        {{width:110, height:110}}
                         resizeMode='contain' 
                         source={{uri:'https://img.icons8.com/ios-glyphs/344/user--v1.png'}} />
        </View>
      </View>

      <TouchableOpacity onPress={handleSignOut}>
            <Text style = {{color: 'red', fontWeight: 'bold', backgroundColor: 'black', fontSize: '13', paddingLeft: 330,}}> Sign out </Text>
        </TouchableOpacity>
      <View style = {styles.center}>
        <Text style= {styles.text}>Followers</Text>
        <Text style= {styles.text}>Following</Text>
        <Text style= {styles.text}>Posts</Text>
        <Text style= {styles.text}>Likes</Text>
      </View>

      <View style = {styles.center}>
        <Text style= {styles.text2}> 2000 </Text>
        <Text style= {styles.text2}> 700 </Text>
        <Text style= {styles.text2}> 25 </Text>
        <Text style= {styles.text2}> 900 </Text>
      </View>

      
      <View style = {styles.bottom}>
        
          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/interests.png')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>
            
          
        
      </View>

      
          <View style ={styles.bottomItem}>
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/garage1.png')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>
  
          </View>
          

          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/posts.png')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>
            
          </View>

          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
            <Image source = {require('../../assets/club.png')} style ={styles.btmimage}  />
              </TouchableOpacity>
            </View>
            
          </View>

          </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
    }, 
    top: { 
      height: '30%',
      paddingTop: '20%',
      paddingLeft: '2%',
      backgroundColor: 'black'
    }, 
    profileimage: {
      width: 120,
      height: 120, 
      borderRadius: 100, 
      borderWidth: 4,
      borderColor: '#fff',
      backgroundColor: '#eee'
    }, 
    text: {
      color: 'white', 
      flexDirection: 'row',
      padding: 13,
      fontSize: 14,
      fontWeight: 'bold'
    }, 
    text2: {
      color: 'white', 
      flexDirection: 'row',
      padding: 1,
      paddingLeft: 39
    },
    center: {
      height: '5%',
      backgroundColor: 'black',
      flexDirection: 'row', 
      flexWrap: 'wrap',
      paddingLeft: 95
    }, 
    btmimage: {
      width: 190,
      height: 207

    },
    bottom: {
      height: '60%',
      backgroundColor: '#383838',
      flexDirection: 'row', 
      flexWrap: 'wrap',
      padding: 5
    }, 
    bottomItem: {
      width: '50%', 
      height: '50%',
      padding: 5
    }, 

    bottomIteminner: {
      flex: 1,
      backgroundColor: '#292929'
    }, 
    bottomtext: {
      color: 'white',
      fontSize: 20, 
      textAlign: 'center',
      paddingTop: 75
    }
})
export default Profilepage