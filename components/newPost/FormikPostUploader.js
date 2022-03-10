import { View, Text , StyleSheet , Image, Button } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import { Divider } from '@react-md/divider'
import { useEffect, useState } from 'react'
import {db, firebase} from '../../firebase'

const Placeholder_IMG = 'https://cdn-icons-png.flaticon.com/512/3305/3305803.png'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is needed'),
    caption: Yup.string().max(2200, 'Caption Has reached max character')
})

const FormikPostUploader = ({navigation}) => {
    const[thumbnailUrl, setThumbnailUrl] = useState('Placeholder_IMG')
   
  return (
    <Formik
    initialValues={{caption: '', imageUrl: ''}}
    onSubmit={(values) => {
        uploadPostToFirebase(values, imageUrl, values.caption)
    }}
    validationSchema={uploadPostSchema}
    validateOnMount ={true}
    >
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
            <>
            <View style ={{padding: 15}}>
                <Image 
                source = {{ uri: thumbnailUrl ? thumbnailUrl : Placeholder_IMG }} 
                style={{width:100, height: 100}}/>
            <TextInput
                style = {{ color: 'white', fontSize: 20, paddingBottom: 20, paddingTop: 20 }}
                placeholder='Write your caption' 
                placeholderTextColor= 'gray'
                multiline = {true}
                onChangeText = {handleChange('caption')}
                onBlur = {handleBlur('caption')}
                value = {values.caption}
                
            />
             </View>
            <TextInput
                onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                style = {{ color: 'white', fontSize: 18 }}
                placeholder='Enter Image Url' 
                placeholderTextColor= 'gray'
                onChangeText = {handleChange('imageUrl')}
                onBlur = {handleBlur('imageUrl')}
                value = {values.imageUrl}
            />
            {errors.imageUrl && (
                <Text style ={{fontSize:10, color: 'red'}}>
                    {errors.imageUrl}
                </Text>
            )}
                 <Button onPress={handleSubmit} title=' Share ' disabled ={!isValid}/>
            </>
             
        )} 
    </Formik>
  )
}

export default FormikPostUploader 





/*
const Placeholder_IMG = 'https://cdn-icons-png.flaticon.com/512/3305/3305803.png'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is needed'),
    caption: Yup.string().max(2200, 'Caption Has reached max character')
})

const FormikPostUploader = ({navigation}) => {
    const[thumbnailUrl, setThumbnailUrl] = useState('Placeholder_IMG')
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

    const getUsername = () => {
        const user = firebase.auth().currentUser
        const unsubscribe = db.collection('users').where('owner_uid', '==', user.uid).limit(1).onSnapshot(
            snapshot => snapshot.docs.map(doc => {
                setCurrentLoggedInUser({
                    username: doc.data().username,
                    profilePicture: doc.data().profilePicture
                })
            })
        )
        return unsubscribe
    }

    useEffect(() => {
        getUsername()
    }, [])
    
const uploadPostToFirebase = (imageUrl, caption) => {
    const unsubscribe = db.collection('users')
    .doc(firebase.auth().currentUser.email)
    .collection('posts')
    .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
    })
    .then(() => navigation.goBack())

    return unsubscribe
}


  return (
    <Formik
    initialValues={{caption: '', imageUrl: ''}}
    onSubmit={(values) => {
        uploadPostToFirebase(values, imageUrl, values.caption)
    }}
    validationSchema={uploadPostSchema}
    validateOnMount ={true}
    >

        {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
            <>
            <View 
            style = {{
                margin: 20, 
                justifyContent: 'space-between', 
                flexDirection: 'row'}}>

                <Image 
                source={{uri: thumbnailURL ? thumbnailUrl : Placeholder_IMG}} 
                style={{width:100, height: 100}}
                />
            <View style={{flex: 1, marginLeft: 12}}>
                <TextInput 
                    style = {{color: 'white', fontSize: 20}}
                    placeholder='Write your caption' 
                    placeholderTextColor='gray'
                    multiline = {true}
                    onChangeText={handleChange('caption')}
                    value ={values.caption}
                    onBlur ={handleBlur('caption')}
                    />
            </View>
            </View>
            <Divider width={0.2} orientation ='vertical' />
            <TextInput 
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                style = {{color: 'white' , fontSize: 17}}
                placeholder='Enter Image URL' 
                placeholderTextColor='gray' 
                onChangeText={handleChange('imageUrl')}
                value ={values.imageUrl}
                onBlur ={handleBlur('imageUrl')}     
            />
            {errors.imageUrl && (
                <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.imageUrl}
                </Text>
            )}

            <Button onPress ={{handleSubmit}} title ='Share' disabled = {!isValid}/>
            </>
        )}
    </Formik>
  )
}

export default FormikPostUploader */