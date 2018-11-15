import { StyleSheet } from 'react-native';
import global from '../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colours.darkGreen,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: global.units.em
  }
})

export default styles;