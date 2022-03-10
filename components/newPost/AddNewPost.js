import { View, Text , StyleSheet, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => (
  <View style = {styles.container}>
      <Header navigation={navigation}/>
      <FormikPostUploader />
  </View>
)

const Header = ({navigation}) => (
<View style ={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source ={{uri: 'https://cdn-icons.flaticon.com/png/512/3325/premium/3325360.png?token=exp=1646871067~hmac=6dea6f849b0bd330cecc8765eac87203' }}
                style={{width: 30, height: 30}}/>
    </TouchableOpacity>
    <Text style ={styles.headerText}> New Post </Text>
    <Text></Text>
</View>
)

const styles = StyleSheet.create({
    container:{
    marginHorizontal: 10,
    },

    headerContainer: {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        flexDirection: 'row',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 23,
        color: 'white'
    }
})

export default AddNewPost