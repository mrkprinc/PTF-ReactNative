import React from 'react';
import { View } from 'react-native';
import { Text } from './CustomComponents';

const TopSources = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>These will be the top sources.</Text>
    </View>
  )
}

export default TopSources;