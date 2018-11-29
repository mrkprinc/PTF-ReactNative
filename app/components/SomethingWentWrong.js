import React from 'react';
import { View } from 'react-native';
import { Text } from './CustomComponents';
import { units } from '../styles/global';

const SomethingWentWrong = props => {
  return (
    <View style={{ padding: units.em }}>
      <Text>Sorry! Something went wrong.</Text>
    </View>
  )
}

export default SomethingWentWrong;