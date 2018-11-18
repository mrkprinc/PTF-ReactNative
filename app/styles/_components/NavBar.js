import { StyleSheet } from 'react-native';
import global from '../global';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 0,
    flexDirection: 'row',
    backgroundColor: global.colours.blue
  },
  button: {
    flex: 2
  }
})

export default styles;