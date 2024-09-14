import React from 'react'
import {StyleSheet, View, Text, Button, Image} from 'react-native'

const CustomCard = (props) => {
  return (
    <View>
        <View style={[styles.card, props.customCardStyle]}>

        <Image source={{ uri: props.customImage }}
         style={[{height: 150, width: 150}, props.customImageStyle]} />

         <Text style={[styles.text,{color: 'black'}, props.customNameStyle]} >
            {props.name || 'Name'}</Text>

        <Text style={[styles.text,{color: 'gray'}, props.customAboutStyle]} >
            {props.about || 'About'}</Text>

        <Text style={[styles.text,{color: 'red'}, props.customRatingsStyle]} >
            {props.ratings || 'Ratings 4.5/5'}</Text>

        </View>
    </View>
  )
}

export default CustomCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    }
})
