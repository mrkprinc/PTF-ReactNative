import { StyleSheet } from 'react-native';
import global from '../global.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: global.colours.halfBlack
  }, 
  modal: {
    backgroundColor: global.colours.green,
    padding: global.units.em
  }
})

export default styles;