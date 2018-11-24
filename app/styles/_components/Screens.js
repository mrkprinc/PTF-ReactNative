import { StyleSheet } from 'react-native';
import { units, colours } from '../global';

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: units.em * 2,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: units.smallpad
  },
  section: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colours.darkGreen,
    borderTopWidth: units.borderWidth,
    borderBottomWidth: units.borderWidth,
    borderStyle: 'solid',
    borderColor: colours.black,
    paddingTop: units.em,
    paddingBottom: units.em
  }
})

export default styles;