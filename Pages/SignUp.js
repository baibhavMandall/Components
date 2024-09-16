import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native'
import CustomButton from '../Components/CustomButton'
import CustomText from '../Components/CustomText'
import CustomInput from '../Components/CustomInput'
import CustomPassword from '../Components/CustomPassword'
import CustomDropdown from '../Components/CustomDropdown'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SignUp = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [Password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [role, setRole] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [referral, setReferral] = useState('')

    const [isClicked, setIsClicked] = useState(false)
    
    const data = [
        { name: 'Select your role'},
        { name: 'User', },
        { name: 'ShopKeeper', },
    ]

    return (

        <ImageBackground source={require('../assets/image2.jpg')} style={[{ height: 900, width: 900 }]} >
            <View style={styles.container1}>
                <CustomText value='Join us now' customTextStyle={{ fontSize: 40, fontWeight: 'bold' }} />
            </View>
            <View style={styles.container2}>


                <ScrollView nestedScrollEnabled={true}>

                    <CustomInput getIcon={<FontAwesome5 name="user-alt" size={30} color="white" />} getData={setUsername} placeholder='Name' customInputStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} PlaceholderColor={'white'} customTextStyle={{ color: 'white' }} />
                    <CustomInput getIcon={<MaterialIcons name="email" size={30} color="white" />} getData={setEmail} placeholder='Email' customInputStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} PlaceholderColor={'white'} customTextStyle={{ color: 'white' }} />
                    <CustomInput getIcon={<FontAwesome name="phone" size={30} color="white" />} inputMode={'numeric'} getData={setPhone} placeholder='Phone' customInputStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} PlaceholderColor={'white'} customTextStyle={{ color: 'white' }} />
                    <CustomPassword getIcon={<FontAwesome5 name="lock" size={30} color="white" />} getData={setPassword} placeholder='Password' customInputStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} PlaceholderColor={'white'} customTextStyle={{ color: 'white' }} />
                    <CustomPassword getIcon={<FontAwesome5 name="lock" size={30} color="white" />} getData={setconfirmPassword} placeholder='Comfirm password' customInputStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} PlaceholderColor={'white'} customTextStyle={{ color: 'white' }} />

                    <CustomDropdown getData={setRole} customDropdownStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} customTextStyle={{ color: 'white', }} customDropdownTextStyle={{color: 'white'}} customDropdownAreStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)', elevation: 0, borderColor: 'white', borderWidth: 2, width: 300}} data={data} ScrollEnabled={false} />

                    <CustomInput getIcon={<FontAwesome5 name="city" size={30} color="white" />} getData={setCity} placeholder='City' customInputStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} PlaceholderColor={'white'} customTextStyle={{ color: 'white' }} />
                    <CustomInput getIcon={<Entypo name="location" size={30} color="white" />} getData={setState} placeholder='State' customInputStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} PlaceholderColor={'white'} customTextStyle={{ color: 'white' }} />
                    <CustomInput getIcon={<Entypo name="location-pin" size={30} color="white" />} getData={setCountry} placeholder='Country' customInputStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} PlaceholderColor={'white'} customTextStyle={{ color: 'white' }} />
                    <CustomInput getIcon={<AntDesign name="gift" size={30} color="white" />} getData={setReferral} placeholder='Referral' customInputStyle={{ width: 300, borderRadius: 15, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} PlaceholderColor={'white'} customTextStyle={{ color: 'white' }} />

                    <CustomButton onPress={() => {setIsClicked(!isClicked)}} title='Create an account' customButtonStyle={{ marginTop: 30, borderRadius: 15 }} getIcon={<AntDesign name="pluscircle" size={24} color="white" />} />
                </ScrollView>
            </View>

        </ImageBackground>

    )
}

export default SignUp;

const styles = StyleSheet.create({
    container1: {
        height: 200,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        height: 650,
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