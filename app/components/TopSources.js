import React from 'react';
import { View, ScrollView } from 'react-native';
import { Heading, Text, Source } from './CustomComponents';
import BackgroundGradient from './BackgroundGradient';
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
          <BackgroundGradient />
          <Heading inheritStyle={{marginBottom: 0}}>Top Sources</Heading>
        </View>

          {this.props.status === 'IN_PROGRESS' &&
            <Text inheritStyle={{padding: units.em}}>Getting sources...</Text>
          }
          {this.props.sources && (
            <ScrollView style={{ width: '95%', marginBottom: 2 * units.em, paddingTop: units.smallpad }}>
              {this.props.sources.map((source, i) => {
                return <Source {...source} key={i} />
              })}
            </ScrollView>
          )}
      </View>
    )
  }
}

export default TopSources;