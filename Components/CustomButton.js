import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const  CustomButton = (props) => {
  return (
    <TouchableOpacity style={[styles.button, props.customButtonStyle]} onPress={props.onPress}>
      <Text style={[styles.text, props.customTextStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({

  button:{
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
