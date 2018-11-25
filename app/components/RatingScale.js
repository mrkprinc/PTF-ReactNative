import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Text } from './CustomComponents';
import styles from '../styles/_components/RatingModal';

class RateScale extends React.Component {
  highlight(num) {
    return this.props.currentValue >= num ? styles.highlight : null;
  }

  render() {
    let scale = [];
    for(let i = 1; i < 11; i++) {
      scale.push(
        <TouchableWithoutFeedback
          onPress={e => this.props.ratingPress(i)}
          key={i}
        >
          <View style={[styles.scaleNumber, this.highlight(i)]}>
            <Text>{i}</Text>
          </View>
        </TouchableWithoutFeedback>
      )
    }

    return (
      <View style={styles.ratingScale}>
        {scale}
      </View>
    )
  }
}

export default RateScale;