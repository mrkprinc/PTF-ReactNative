import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Text from './Text';
import NavBar from './Navbar';
import styles from '../styles/_components/App';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>This will be the Press the Freedom app.</Text>
          <NavBar />
        </View>
      </Provider>
    );
  }
}
