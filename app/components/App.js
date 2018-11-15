import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import NavBar from './Navbar';
import styles from '../styles/_components/App';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This will be the Press the Freedom app.</Text>
        <NavBar />
      </View>
    );
  }
}
