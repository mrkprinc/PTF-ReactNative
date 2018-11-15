import React from 'react';
import { View } from 'react-native';
import { Button } from './CustomComponents';
import styles from '../styles/_components/NavBar';

const NavBar = props => {
  return (
    <View style={styles.container}>
      <Button text={'Articles'} inheritStyle={styles.button} />
      <Button text={'Top Sources'} inheritStyle={styles.button} />
      <Button text={'⚙'} inheritStyle={{flex: 1}} />
    </View>
  )
}

export default NavBar;