import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

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

      <View style = {styles.center}>
        <Text style= {styles.text}>Followers</Text>
        <Text style= {styles.text}>Followers</Text>
      </View>
      
      <View style = {styles.bottom}>
        
          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
              <Text style= {styles.bottomtext}> Post </Text>
              </TouchableOpacity>
            </View>
            
          
        
      </View>

      
          <View style ={styles.bottomItem}>
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
              <Text style= {styles.bottomtext}> Garage </Text>
              </TouchableOpacity>
            </View>
  
          </View>
          

          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
              <Text style= {styles.bottomtext}> Create Club </Text>
              </TouchableOpacity>
            </View>
            
          </View>

          <View style ={styles.bottomItem}>
          
            <View style ={styles.bottomIteminner}>
            <TouchableOpacity >
              <Text style= {styles.bottomtext}> Interests </Text>
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
      height: '35%',
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
      color: 'black', 
      flexDirection: 'row',
      flex: 1
    }, 
    center: {
      height: '5%',
      backgroundColor: 'brown'
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