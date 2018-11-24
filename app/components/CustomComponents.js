import React from 'react';
import { TouchableOpacity, View, Text as NativeText, StyleSheet } from 'react-native';
import { buttonStyles, sourceStyles } from '../styles/_components/CustomComponents';
import styles from '../styles/main';

export const Button = props => {
  return (
    <TouchableOpacity 
      style={[buttonStyles.container, props.inheritStyle]}
      onPress={props.onPress}>
      <View style={[buttonStyles.button, props.inheritStyle]}>
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

export const Article = props => {
  return (
    <View style={sourceStyles.container}>
      <Text inheritStyle={sourceStyles.headline}>
        {props.headline}&nbsp;
        <Text inheritStyle={{fontStyle: 'italic'}}>
          ({props.source})
        </Text>
      </Text>
      <Button 
        text={'Rate'} 
        inheritStyle={sourceStyles.button} 
        onPress={props.showModal}
      />
    </View>
  )
}