import { StyleSheet } from 'react-native';
import { colours, units } from '../global.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.halfBlack
  }, 
  modal: {
    backgroundColor: colours.green,
    padding: units.em,
    margin: units.em
  },
  ratingScale: {
    flexDirection: 'row',
    marginTop: units.em,
    marginBottom: units.em
  },
  scaleNumber: {
    flex: 1,
    alignItems: 'center',
    padding: units.smallpad
  },
  highlight: {
    backgroundColor: colours.highlight
  }
})

export default styles;