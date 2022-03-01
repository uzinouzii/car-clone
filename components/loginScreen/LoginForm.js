import { View, Text, Button,StyleSheet, Pressable,Alert } from 'react-native';
import React, {useState} from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Formik} from 'formik'
import Validator from 'email-validator'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../../firebase';

const LoginForm = ({navigation}) => {
    const LoginFormSchema =Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(6, 'Your password has to be at least 8 characters')
    })

    const onLogin = async (email, password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log('Login Successful', email , password)
        } catch (error) {
            Alert.alert('Hello ', error.message + '\n\n Try again') 
            [
                {
                    text: 'Ok mate',
                    onPress: () => console.log('OK'),
                    style: 'cancel',
                }
                
            ]
        }
    } 

  return (
    <View style = {styles.wrapper}>
        <Formik 
        initialValues={{email: '', password:''}}
        onSubmit= {values => {
            onLogin(values.email, values.password)
        }}
        validationSchema={LoginFormSchema}
        validateOnMount ={true}
        >
            {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
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
                placeholder = 'Phone Number, Username or email'
                autoCapitalize = 'none'
                keyboardType ='Email-address'
                textContentType ='emailAddress'
                autoFocus ={true}
                onChangeText ={handleChange('email')}
                onBlur ={handleBlur('email')}
                value={values.email}/>
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
                textContentType ='password'
                onChangeText ={handleChange('password')}
                onBlur ={handleBlur('password')}
                value={values.password}/>
        </View> 
        <View style ={{alignItems: 'flex-end', marginBottom: 20, marginTop: 10}}>
            <Text style ={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>
                Forgot Password?
            </Text>
        </View>
      <TouchableOpacity titleSize ={20} style = {styles.button} onPress={handleSubmit}>
          <Text style = {styles.buttonText}>
              Log In
          </Text>
      </TouchableOpacity>

        <View style ={styles.sigupContainer}>
            <Text style ={{color: 'white', fontSize: 15, fontWeight: 'bold'}}> Don't have a account? </Text>
            <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                <Text style ={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        </>
                ))}
      </Formik>
    </View>
  );
};

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
    sigupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
})




export default LoginForm;
