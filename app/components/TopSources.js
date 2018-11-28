import React from 'react';
import { View, ScrollView } from 'react-native';
import { Heading, Text, Source } from './CustomComponents';
import screenStyles from '../styles/_components/Screens';
import { units } from '../styles/global';

class TopSources extends React.Component {
  componentDidMount() {
    this.props.getTopSources();
  }
  
  render() {
    return (
      <View style={screenStyles.screen}>
        <View style={screenStyles.section}>
          <Heading>Top Sources</Heading>
          {this.props.status === 'IN_PROGRESS' &&
            <Text inheritStyle={{padding: units.em}}>Getting sources...</Text>
          }
          <ScrollView style={{width: '100%'}}>
            <Source />
            <Source />
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default TopSources;