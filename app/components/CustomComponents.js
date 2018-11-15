import React from 'react';
import { TouchableOpacity, View, Text as NativeText } from 'react-native';
import { buttonStyles, sourceStyles } from '../styles/_components/CustomComponents';
import styles from '../styles/_components/App';
import global from '../styles/global';

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

export const Heading = props => {
  return (
    <Text inheritStyle={styles.heading}>{props.children}</Text>
  )
}

export const Source = props => {
  return (
    <View style={sourceStyles.container}>
      <Text>This is a source.</Text>
      <Text>Ratings go here.</Text>
    </View>
  )
}