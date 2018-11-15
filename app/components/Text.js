import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/_components/App';

const MyText = props => {
  return (
    <Text style={[styles.text, props.inheritStyle]}>{props.children}</Text>
  )
}

export default MyText;