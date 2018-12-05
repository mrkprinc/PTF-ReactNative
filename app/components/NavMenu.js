import React from 'react';
import { View } from 'react-native';
import { Button } from './CustomComponents';
import { screens } from '../actions/navigate';
import styles from '../styles/_components/NavBar';

const NavMenu = props => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Button 
        text='Articles' inheritStyle={styles.button}
        onPress={() => props.goTo(screens.SEARCH)}
        disabled={props.currentScreen === screens.SEARCH} 
      />

      <Button 
        text='Top Sources' inheritStyle={styles.button} 
        onPress={() => props.goTo(screens.TOP_SOURCES)} 
        disabled={props.currentScreen === screens.TOP_SOURCES}
      />
    </View>
  )
}

export default NavMenu;