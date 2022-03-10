import { View, Text } from 'react-native';
import React from 'react';
import  { users }  from './users'

export const POSTS = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1641468988538-fd4dec671ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        user: users[0].user,
        likes: 222,
        caption : "Sitting preety",
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

    {
        imageUrl: 'https://images.unsplash.com/photo-1607603750916-eaf866bc907d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        user: users[1].user,
        likes: 3000,
        caption : "Lambo Killer",
        profile_picture: users[0].image,
        Comments: [
            {
                user: 'Supra_jj',
                comment: ' Sick shot',
            },
            {
                user: 'Ab_gti',
                comment: ' Fireee bro',
            },
        ],
    }, 

    {
        imageUrl: 'https://images.unsplash.com/photo-1635684614152-e0888d2e83b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        user: users[2].user,
        likes: 4000,
        caption : "Trying out my new camera",
        profile_picture: users[0].image,
        Comments: [
            {
                user: 'GTR_hk',
                comment: ' Looks amazing',
            },
            {
                user: 'GtrFan1',
                comment: ' Clean dood',
            },
        ],
    }, 

    {
        imageUrl: 'https://images.unsplash.com/photo-1536909526839-8f10e29ba80c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        user: users[3].user,
        likes: 222,
        caption : "Drift days",
        profile_picture: users[0].image,
        Comments: [
            {
                user: 'UZojj',
                comment: 'Fireee bro',
            },
            {
                user: 'Drift_e36',
                comment: ' Burn the tyresss ',
            },
        ],
    }, 

    {
        imageUrl: 'https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        user: users[3].user,
        likes: 222,
        caption : "Brand new purchase",
        profile_picture: users[0].image,
        Comments: [
            {
                user: 'Supercar_1',
                comment: ' Congrats bro',
            },
            {
                user: 'Plieo1',
                comment: ' Nice wheels too',
            },
        ],
    }, 
     

]


