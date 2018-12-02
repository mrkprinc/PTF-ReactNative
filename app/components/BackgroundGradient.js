import React from 'react';
import { View, Image } from 'react-native';

export default () => {
  return (
    <View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }}>
      <Image
        source={require('../../assets/gradient.jpg')}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </View>
  )
}