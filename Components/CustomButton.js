import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const  CustomButton = (props) => {
  return (
    <TouchableOpacity style={[styles.button, props.customButtonStyle]} onPress={props.onPress}>
      {props.getIcon}
      <Text style={[styles.text, props.customTextStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({

  button:{
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#1DA1F2',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 4,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
