import { StyleSheet } from 'react-native';
import global from './global';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: global.colours.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: global.units.em,
    fontFamily: 'System',
    lineHeight: 22
  },
  heading: {
    fontSize: global.text.headerSize,
    fontWeight: 'bold',
    color: global.colours.halfBlack,
    marginBottom: global.units.em
  },
  input: {
    backgroundColor: global.colours.white,
    padding: global.units.smallpad * 3,
    width: '90%',
    marginBottom: global.units.em
  }
})

export default styles;