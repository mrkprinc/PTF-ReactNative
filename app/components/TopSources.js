import React from 'react';
import { View, ScrollView } from 'react-native';
import { Heading, Source } from './CustomComponents';
import screenStyles from '../styles/_components/Screens';

const TopSources = props => {
  return (
    <View style={screenStyles.screen}>
      <Heading>Top Sources</Heading>
      <ScrollView style={{width: '100%'}}>
        <Source />
        <Source />
      </ScrollView>
    </View>
  )
}

export default TopSources;