import { StyleSheet } from 'react-native';
import global from './global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colours.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: global.colours.highlight,
    padding: 10
  }
})

export default styles;