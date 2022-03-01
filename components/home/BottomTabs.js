/*import { View, Text, StyleSheet,TouchabelOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'


export const bottomTabIcons = [
{
    name:'Home',
    active: 'https://img.icons8.com/color/344/like--v3.png',
    inactive:'https://img.icons8.com/color/344/like--v3.png',
},

{
    name:'Search',
    active: 'https://img.icons8.com/ios-filled/2x/google-web-search.png',
    inactive: 'https://cdn-icons.flaticon.com/png/512/3417/premium/3417100.png?token=exp=1644074123~hmac=f1c39a991f3fd981b11fa64e43c8a8e6',
},
{
    name:'MarketPlace',
    active: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-marketplace-with-groceries-and-other-items-isolated-on-white-background-seo-bold-tal-revivo.png',
    inactive:'https://cdn-icons.flaticon.com/png/512/3417/premium/3417100.png?token=exp=1644074123~hmac=f1c39a991f3fd981b11fa64e43c8a8e6',
},
{
    name:'Profile',
    active: 'https://img.icons8.com/ios-glyphs/344/person-male.png',
    inactive: 'https://cdn-icons.flaticon.com/png/512/3417/premium/3417100.png?token=exp=1644074123~hmac=f1c39a991f3fd981b11fa64e43c8a8e6',
},
]

const BottomTabs = ({ Icons }) => {
    const [activeTab, setActiveTab] =useState('Home')

    const Icon = ({ icon }) => (
        <TouchabelOpacity onPress ={() => setActiveTab(icon.name)}>
            <Image source ={{uri: icon.inactive}} style={styles.icon}/>
        </TouchabelOpacity>
    )

    return (
         <View>
            {Icons && Icons.map((icon, index) => (
                <Icon key ={index} icon ={icon} />
            ))}
        </View>
    )

}
    const styles = StyleSheet.create({
        icon: {
            width: 30,
            height: 30,
        },
    })


export default BottomTabs
*/