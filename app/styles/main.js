import { StyleSheet } from 'react-native';
import { colours, units, text } from './global';
import global from './global';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colours.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: units.em,
    fontFamily: 'System',
    lineHeight: 22
  },
  heading: {
    fontSize: text.headerSize,
    fontWeight: 'bold',
    color: colours.halfBlack,
    marginBottom: units.em
  },
  input: {
    backgroundColor: colours.white,
    padding: units.smallpad * 3,
    width: '90%',
    marginBottom: units.em
  }
})

export default styles;