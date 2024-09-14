import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const CustomText = (props) => {

    return (
        <View>
            <Text style={[styles.text, props.customTextStyle]}>{props.value}</Text>
        </View>
    )
}

export default CustomText;

const styles = StyleSheet.create({
    container: {

    },
    text: {
        fontSize: 20,
        color: 'white'
    }
})