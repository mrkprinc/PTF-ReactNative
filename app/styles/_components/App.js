import { StyleSheet } from 'react-native';
import global from '../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colours.darkGreen,
    alignItems: 'center',
    justifyContent: 'center'
  },
  screen: {
    position: 'absolute',
    top: global.units.em * 2,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: global.units.smallpad
  },
  text: {
    fontSize: global.units.em
  },
  heading: {
    fontSize: global.text.headerSize,
    fontWeight: 'bold',
    color: global.colours.halfBlack,
    marginBottom: global.units.em
  }
})

export default styles;