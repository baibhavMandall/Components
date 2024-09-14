import React, {useEffect, useState } from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const CustomInput = (props) => {

    const [variable, setVariable] = useState('')

    const handleInputChange = (text) => {
        setVariable(text);
    }

    useEffect(() => {
        props.getData(variable);
    },[variable]);

  return (
    <View style={[styles.container, props.customInputStyle]}>
        {props.getIcon}
        <TextInput
            style={[props.customInputStyle]}
            placeholder={props.placeholder}
            onChangeText={handleInputChange}
        />
    </View>
  )
}

export default CustomInput

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
        marginBottom: 20,
    },
    
})