import React, { useState } from 'react'
import {View, StyleSheet, ImageBackground} from 'react-native'
import CustomButton from '../Components/CustomButton'
import CustomText from '../Components/CustomText'
import CustomCheckbox from '../Components/CustomCheckbox'
import CustomInput from '../Components/CustomInput'
import CustomPassword from '../Components/CustomPassword'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Login = () => {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [Check, setCheck] = useState(false)

  return (
    <ImageBackground source={require('../assets/image1.jpg')} style={[{height: 900, width: 900}]} >
        <View style={styles.container1}>
            <CustomText value='Why We' customTextStyle={{fontSize: 40, fontWeight: 'bold'}}/>
            <CustomText value='Wait' customTextStyle={{fontSize: 60, fontWeight: 'bold'}}/>
        </View>
        <View style={styles.container2}>
            <CustomInput getIcon={<FontAwesome5 name="user-alt" size={24} color="black" />} getData={setUsername} placeholder='Enter your username' customInputStyle={{width: 300, borderRadius: 15}} />
            <CustomPassword getIcon={<FontAwesome5 name="lock" size={24} color="black" />} getData={setPassword} placeholder='Enter your password' customInputStyle={{width: 300, borderRadius: 15}} />

            <View style={{display: 'flex', flexDirection: 'row', gap: 50, marginTop: 10}}>
                <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                    <CustomCheckbox getStatus={setCheck}/>
                    <CustomText value='Remember Me' customTextStyle={{fontSize: 15, color: 'gray'}}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                    <CustomText value='Forget Password' customTextStyle={{fontSize: 15, color: 'blue'}}/>
                </View>
            </View>

            <CustomButton title='Login' customButtonStyle={{marginTop: 30, borderRadius: 15}} getIcon={<Entypo name="login" size={24} color="black" />}/>

            <View style={{display: 'flex', flexDirection: 'row', gap: 10, marginTop: 30}}>
                <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                    <CustomText value='Do not have an account?' customTextStyle={{fontSize: 15, color: 'white'}}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                    <CustomText value='Sign Up!' customTextStyle={{fontSize: 15, color: 'blue'}}/>
                </View>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', gap: 50, marginTop: 30}}>
                    <CustomButton title='Google' getIcon={<FontAwesome5 name="google" size={24} color="black" />} customTextStyle={{color: 'black'}}/>                
                    <CustomButton title='Facebook' getIcon={<FontAwesome5 name="facebook" size={24} color="black" />} />
            </View>
            
        </View>
    </ImageBackground>
  )
}

export default Login;

const styles = StyleSheet.create({
    container1: {
        height: 350,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        height: 500,
        width: 400,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    
})