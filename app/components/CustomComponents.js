import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, Text as NativeText } from 'react-native';
import { buttonStyles, sourceStyles, ratingStyles } from '../styles/_components/CustomComponents';
import styles from '../styles/main';

const ButtonComponent = props => {
  return (
    <TouchableOpacity 
      style={[buttonStyles.container, props.inheritStyle, props.disabled && buttonStyles.disabled]}
      activeOpacity={0.6}
      onPress={props.onPress}
      disabled={props.disabled}>
      <View style={[buttonStyles.button, props.inheritStyle]}>
        <Text inheritStyle={buttonStyles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export const Button = connect(state => { return { disabled: state.freeze } })(ButtonComponent);

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
      <Heading>{props.name}</Heading>
      <View>
        <Text inheritStyle={ratingStyles.rating}>Credible: {props.credibleScore}</Text>
        <Text inheritStyle={ratingStyles.rating}>Accurate: {props.accurateScore}</Text>
        <Text inheritStyle={ratingStyles.rating}>Relevant: {props.relevantScore}</Text>
      </View>
    </View>
  )
}

export const Article = props => {
  return (
    <View style={sourceStyles.container}>
      <Text inheritStyle={sourceStyles.headline}>
        {props.headline}&nbsp;
        <Text inheritStyle={{fontStyle: 'italic'}}>
          ({props.sourceName})
        </Text>
      </Text>
      <Button 
        text={'Rate'} 
        inheritStyle={sourceStyles.button} 
        onPress={() => props.showModal(props.source, props.url)}
      />
    </View>
  )
}