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
        <Image source ={{uri: 'https://cdn-icons.flaticon.com/png/512/5229/premium/5229132.png?token=exp=1646876919~hmac=2bf1c33c77641defe66a6c3efb60a4f4' }}
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