import { View, Text, Button,StyleSheet, Pressable } from 'react-native';
import React, {useState} from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Formik} from 'formik'
import Validator from 'email-validator'
import * as Yup from 'yup'
import { Navigation } from 'react-native-navigation';
import { useNavigation } from '@react-navigation/native';
import {firebase, db} from '../../firebase'

const SignupForm = ({navigation}) => {
    const SignupFormSchema =Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(6, 'Your password has to be at least 8 characters')
})

//gets random user
const getRandomProfilePicture = async () => {
    const response = await fetch ('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
}

const onSignUp = async (email, password, username) => {
    try {
        const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log("User created successfully")
        db.collection('users').add({
            owner_uid: 
            authUser.user.uid,
            username: username,
            email: authUser.user.email,
            Profile_pic: await getRandomProfilePicture(),
        })
     } catch(error) {
            alert.alert(error.message)
        }
    }


return (
    <View style = {styles.wrapper}>
        <Formik 
        initialValues={{email: '', username: '', password:''}}
        onSubmit= {values => {
            onSignUp(values.email, values.password, values.username)
        }}
        validationSchema={SignupFormSchema}
        validateOnMount ={true}
        >
            {({ handleChange, handleBlur, handleSubmit, values, isValid}) => (
                (
            <>
        <View style = {[styles.inputField,
        {
            borderColor: 
                values.email.length < 1 || Validator.validate(values.email)
                    ? '#ccc'
                    : 'red',
        },
        ]}>
            <TextInput
                placeholderTextColor ='#444'
                placeholder = 'Email'
                autoCapitalize = 'none'
                keyboardType ='Email-address'
                autoFocus ={true}
                onChangeText ={handleChange('email')}
                onBlur ={handleBlur('email')}
                value={values.email}/>
        </View>
 
        <View style = {[styles.inputField,
        {
            borderColor: 
                1 > values.username.length || values.username.length > 6 
                    ? '#ccc'
                    : 'red',
        },
        ]}>
            <TextInput
                placeholderTextColor ='#444'
                placeholder = 'username'
                autoCapitalize = 'none'
                textContentType ='username'
                onChangeText ={handleChange('username')}
                onBlur ={handleBlur('username')}
                value={values.username}/>
        </View> 

        <View style = {[styles.inputField,
        {
            borderColor: 
                1 > values.password.length || values.password.length > 6 
                    ? '#ccc'
                    : 'red',
        },
        ]}>
            <TextInput
                placeholderTextColor ='#444'
                placeholder = 'Password'
                autoCapitalize = 'none'
                autoCorrect ='Email-address'
                secureTextEntry = {true}
                onChangeText ={handleChange('password')}
                onBlur ={handleBlur('password')}
                value={values.password}/>
        </View> 

        <Pressable 
        titleSize ={20}
        style ={styles.button}
        onPress={handleSubmit}
        >
            <Text style ={styles.buttonText}> Sign up </Text>
        </Pressable>

        <View style ={styles.loginContainer}>
            <Text style ={{color: 'white', fontSize: 15}}> Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                <Text style ={{color: 'red', fontSize: 15}}>
                    Log in
                </Text>
            </TouchableOpacity>
        </View>
        </>
        ))}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 60,
    }, 

    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },

    loginContainer: {
        flexDirection: 'row',
        width: '110%',
        justifyContent: 'center',
        marginTop: 50,
    
    },
    button: {
        backgroundColor: '#DAF7A6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,

    },
    buttonText: {
        fontWeight: '500',
        color: 'black',
        fontSize: 14,
    },

})
export default SignupForm;