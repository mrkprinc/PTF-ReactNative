import { StyleSheet } from 'react-native';
import global from '../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colours.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: global.units.em,
    fontFamily: 'System'
  },
  heading: {
    fontSize: global.text.headerSize,
    fontWeight: 'bold',
    color: global.colours.halfBlack,
    marginBottom: global.units.em
  }
})

export default styles;