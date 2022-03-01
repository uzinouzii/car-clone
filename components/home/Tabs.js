import { View, Image, StyleSheet, TouchableOpacity, Animated, Text, Alert } from 'react-native';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { Navigation } from 'react-native-navigation';
import { useNavigation } from '@react-navigation/native';
import {createBottomTabsNavigator} from '@react-navigation/bottom-tabs'

const Tabs = ({navigation}) =>{
   
  return (
    <View style= {{
        flex: 1,
        flexDirection: 'coloumn',
        backgroundColor: 'green',
    }}>
        <View style ={{
            position:'absolute',
             alignSelf:'center',
             backgroundColor:'white',
              width:20, 
              height: 30, 
              borderRadius:25,
              bottom:35,
            zIndex:10
            }}>
                 <TouchableOpacity onPress={() => navigation.navigate('TrackScreen')}>
                    <View style={[styles.button,styles.actionBtn]}>
                        <Image style=
                        {{width:60, height:70}}
                         resizeMode='contain' 
                         source={{uri:'https://cdn-icons-png.flaticon.com/512/1581/1581891.png'}} />
                    </View>

                </TouchableOpacity>
            </View>
            <View style={{

            position: 'absolute',
            backgroundColor: 'white',
            border: 1,
            radius: 2,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {

                height: 2, width: 2
            },
            x: 0,
            y: 0,
            style: { marginVertical: 5 },
            bottom: 0,
            width: '100%',
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 15,


}}>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginStart:18,
                    paddingVertical: 18
                    }}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image
                            style={{ width: 29, height: 30 }}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5188/5188748.png' }}
                            onPress={()=>{Alert.alert("")}}>
                        </Image>
                    </TouchableOpacity>
                        
                </View>

                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'center',
                    marginStart:18,
                    paddingVertical: 11
                    }}>
                 <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                        <Image
                            style={{  width: 29, height: 30 }}
                            source={{ uri: 'http://simpleicon.com/wp-content/uploads/active-search.png' }}
                            onPress={() => { Alert.alert("click") }}/>
                        </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'space-between',
                    marginStart:85,
                    paddingVertical: 8
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MarketPlaceScreen')}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png' }}
                            onPress={() => { Alert.alert("click") }}
                            style={{ marginHorizontal: 1, width: 28, height: 28 }}
                            containerStyle={{ marginHorizontal: 15 }}/>
                        </TouchableOpacity>    
                </View>


                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'space-between',
                    paddingVertical: 7  
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/75/75816.png' }}
                            style={{ width: 29, height: 30 }}
                            containerStyle={{ marginHorizontal: 16 }} />
                            </TouchableOpacity>
                </View>


            </View>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent:'center',
        shadowColor: 'white',
        shadowOpacity: 0.1,
        shadowOffset: {x:1 , y: 0},
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },

    actionBtn: {
        backgroundColor: '#1E90FF',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius: 10,
        borderWidth:2,
        borderColor:'#fff'
        
    }
})


export default Tabs 
