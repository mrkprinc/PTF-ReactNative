import { StyleSheet } from 'react-native';
import global from '../global';

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: global.units.em * 2,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: global.units.smallpad
  },
  section: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: global.colours.darkGreen,
    borderTopWidth: global.units.borderWidth,
    borderBottomWidth: global.units.borderWidth,
    borderStyle: 'solid',
    borderColor: global.colours.black,
    paddingTop: global.units.em,
    paddingBottom: global.units.em
  }
})

export default styles;