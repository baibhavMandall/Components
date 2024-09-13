import React, {useEffect, useState } from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
const CustomInput = (props) => {

    const [variable, setVariable] = useState('')

    const handleInputChange = (text) => {
        setVariable(text);
    }

    useEffect(() => {
        props.onChange(variable);
    },[variable]);

  return (
    <View>
        <TextInput
            style={[styles.input, props.customInputStyle]}
            placeholder={props.placeholder || 'Enter your name'}
            onChangeText={handleInputChange}
        />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        borderWidth: 3,
        borderColor: 'gray',
        backgroundColor: 'white',
        textAlign: 'center',
        height: 50,
        width: 200,
        marginBottom: 10,
        borderRadius: 5,
    }
})