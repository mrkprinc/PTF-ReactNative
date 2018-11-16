import { StyleSheet } from 'react-native';
import global from './global';

const styles = StyleSheet.create({
  input: {
    backgroundColor: global.colours.white,
    padding: global.units.smallpad * 3,
    width: '90%',
    marginBottom: global.units.em
  }
})

export default styles;