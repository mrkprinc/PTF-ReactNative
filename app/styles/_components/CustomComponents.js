import { StyleSheet } from 'react-native';
import global from '../global';

export const buttonStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    padding: global.units.em,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: global.colours.black,
    borderRadius: global.units.smallpad,
    margin: global.units.smallpad
  },
  text: {
    textAlign: 'center'
  }
})