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
    margin: global.units.smallpad,
    backgroundColor: global.colours.light
  },
  text: {
    textAlign: 'center'
  }
})

export const sourceStyles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: global.units.smallpad,
    margin: global.units.smallpad,
    backgroundColor: global.colours.green,
  }
})