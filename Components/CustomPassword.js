import React, {useEffect, useState } from 'react'
import {StyleSheet, View, TextInput, Image, Text} from 'react-native'

const CustomPassword = (props) => {

    const [value, setValue] = useState('')

    const handleInputChange = (text) => {
        setValue(text);
    }

    useEffect(() => {
        props.getData(value)
    },[value])

  return (
    <View style={[styles.container, props.customInputStyle]} >
        {props.getIcon}
        <TextInput
            style={[styles.text , props.customTextStyle]}
            placeholder={props.placeholder}
            onChangeText={handleInputChange}
            placeholderTextColor={props.PlaceholderColor}
            secureTextEntry
        />

    </View>
  )
}

export default CustomPassword

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        borderWidth: 2,
        borderColor: 'gray',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 20,
    },
})