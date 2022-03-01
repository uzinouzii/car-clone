import { View, Text } from 'react-native';
import React from 'react';
import  { users }  from './users'

export const POSTS = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1617397817003-5323010077c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        user: users[0].user,
        likes: 222,
        caption : "Say hello to my e36",
        profile_picture: users[0].image,
        Comments: [
            {
                user: 'Uzinouziii',
                comment: ' Niceeeeeeee car',
            },
            {
                user: 'Shpend_c63',
                comment: ' Nice pic',
            },
        ],
    },

]


