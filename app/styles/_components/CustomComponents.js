import { StyleSheet } from 'react-native';
import { colours, units } from '../global';

export const buttonStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    padding: units.em,
    borderWidth: units.borderWidth,
    borderStyle: 'solid',
    borderColor: colours.black,
    borderRadius: units.smallpad,
    margin: units.smallpad,
    backgroundColor: colours.light
  },
  text: {
    textAlign: 'center'
  },
  disabled: {
    opacity: 0.5
  }
})

export const sourceStyles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: units.smallpad,
    margin: units.smallpad,
    backgroundColor: colours.green,
  },
  headline: {
    flex: 1,
    paddingLeft: units.smallpad * 2,
    paddingRight: units.smallpad
  },
  button: {
    flex: 0
  }
})

export const ratingStyles = StyleSheet.create({
  rating: {
    padding: units.smallpad,
    margin: units.smallpad,
    backgroundColor: colours.highlight
  }
})