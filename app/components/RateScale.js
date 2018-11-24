import React from 'react';
import { View } from 'react-native';
import { Text } from './CustomComponents';
import styles from '../styles/_components/RatingModal';

class RateScale extends React.Component {
  highlight(num) {
    return this.props.currentValue >= num ? styles.highlight : null;
  }

  render() {
    let scale = [];
    for(let i = 1; i < 11; i++) {
      scale.push(<View
        style={[styles.scaleNumber, this.highlight(i)]}
        onPress={e => this.handleClick(e, i)}
        key={i}
      >
        <Text>{i}</Text>
      </View>)
    }

    return (
      <View style={styles.ratingScale}>
        {scale}
      </View>
    )
  }
}

export default RateScale;