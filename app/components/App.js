import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/main';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This will be the Press the Freedom app.</Text>
      </View>
    );
  }
}
