import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRouter } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import TrackScreen from './screens/TrackScreen';
import SearchScreen from './screens/SearchScreen';
import MarketPlaceScreen from './screens/MarketPlaceScreen';
import Profile from './screens/ProfileScreen';
import NewEvents from './screens/NewEvents';
import Track1 from './screens/raceTracks/Track1';
import Track2 from './screens/raceTracks/Track2';
import Track3 from './screens/raceTracks/Track3';
import Track4 from './screens/raceTracks/Track4';
import Track5 from './screens/raceTracks/Track5';
import Track6 from './screens/raceTracks/Track6';
import Nissan350z from './screens/carsData/Nissan350z';
import Audirs3 from './screens/carsData/Audirs3';
import Bmw from './screens/carsData/Bmw';
import DodgeCharger from './screens/carsData/DodgeCharger';
import Golfr from './screens/carsData/Golfr';
import HondaCivic from './screens/carsData/HondaCivic';
import Lambo from './screens/carsData/Lambo';
import Porsche from'./screens/carsData/Porsche';
import Skyline from './screens/carsData/Skyline';
import RegentStreetshow from './screens/Events/RegentStreetshow';
import Centraldrive from './screens/Events/Centraldrive';
import Classics from './screens/Events/Classics';
import German from './screens/Events/German';
import Jap from './screens/Events/Jap';
import Wales from './screens/Events/Wales';
import Users from './screens/Users/Users';
import Vehicles from './screens/Vehicle/Vehicles';
import Clubs from './screens/Club/Clubs'




const Stack = createStackNavigator()

const screenOptions ={
    headerShown: false
}


export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='HomeScreen' 
        screenOptions = {screenOptions}
        >
            <Stack.Screen name ='HomeScreen' component ={HomeScreen} options ={{title: 'Home Screen'}}/>
            <Stack.Screen name = 'TrackScreen' component ={TrackScreen} options ={{title: 'Track Page'}}/>
            <Stack.Screen name = 'SearchScreen' component ={SearchScreen} options ={{title: 'Search page'}}/>
            <Stack.Screen name = 'MarketPlaceScreen' component ={MarketPlaceScreen} options ={{title: 'Market Place'}}/>
            <Stack.Screen name = 'Profile' component ={Profile}/>
            <Stack.Screen name = 'NewEvents' component ={NewEvents}/>
            <Stack.Screen name = 'Track1' component ={Track1}/>
            <Stack.Screen name = 'Track2' component ={Track2}/>
            <Stack.Screen name = 'Track3' component ={Track3}/>
            <Stack.Screen name = 'Track4' component ={Track4}/>
            <Stack.Screen name = 'Track5' component ={Track5}/>
            <Stack.Screen name = 'Track6' component ={Track6}/>
            <Stack.Screen name = 'Nissan350z' component ={Nissan350z}/>
            <Stack.Screen name = 'Audirs3' component ={Audirs3}/>
            <Stack.Screen name = 'Bmw' component ={Bmw}/>
            <Stack.Screen name = 'DodgeCharger' component ={DodgeCharger}/>
            <Stack.Screen name = 'Golfr' component ={Golfr}/>
            <Stack.Screen name = 'HondaCivic' component ={HondaCivic}/>
            <Stack.Screen name = 'Lambo' component ={Lambo}/>
            <Stack.Screen name = 'Porsche' component ={Porsche}/>
            <Stack.Screen name = 'Skyline' component ={Skyline}/>
            <Stack.Screen name = 'RegentStreetshow' component ={RegentStreetshow}/>
            <Stack.Screen name = 'Centraldrive' component ={Centraldrive}/>
            <Stack.Screen name = 'Classics' component ={Classics}/>
            <Stack.Screen name = 'Jap' component ={Jap}/>
            <Stack.Screen name = 'Wales' component ={Wales}/>
            <Stack.Screen name = 'German' component = {German}/>
            <Stack.Screen name = 'Clubs' component={Clubs}/>
            <Stack.Screen name = 'Users' component={Users}/>
            <Stack.Screen name = 'Vehicles' component={Vehicles}/>
         </Stack.Navigator>
    </NavigationContainer>
  )

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='LoginScreen' 
        screenOptions = {screenOptions}
        >
            <Stack.Screen name = 'LoginScreen' component ={LoginScreen}/>
            <Stack.Screen name = 'SignupScreen' component ={SignupScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )


