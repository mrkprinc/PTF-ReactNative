import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from './Text';
import styles from '../styles/_components/Button';

const Button = props => {
  return (
    <TouchableOpacity style={[styles.container, props.inheritStyle]}>
      <View style={styles.button}>
        <Text inheritStyle={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button;