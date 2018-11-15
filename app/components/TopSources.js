import React from 'react';
import { View, ScrollView } from 'react-native';
import { Heading, Text, Source } from './CustomComponents';
import styles from '../styles/_components/App';

const TopSources = props => {
  return (
    <View style={styles.screen}>
      <Heading>Top Sources</Heading>
      <ScrollView style={{width: '100%'}}>
        <Source />
        <Source />
      </ScrollView>
    </View>
  )
}

export default TopSources;