import { StyleSheet } from 'react-native';
import global from '../global';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: global.colours.green
  },
  button: {
    flex: 2
  }
})

export default styles;