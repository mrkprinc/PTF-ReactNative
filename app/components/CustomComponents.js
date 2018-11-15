import React from 'react';
import { TouchableOpacity, View, Text as NativeText } from 'react-native';
import { buttonStyles } from '../styles/_components/CustomComponents';
import styles from '../styles/_components/App';

export const Button = props => {
  return (
    <TouchableOpacity style={[buttonStyles.container, props.inheritStyle]}>
      <View style={buttonStyles.button}>
        <Text inheritStyle={buttonStyles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export const Text = props => {
  return (
    <NativeText style={[styles.text, props.inheritStyle]}>{props.children}</NativeText>
  )
}