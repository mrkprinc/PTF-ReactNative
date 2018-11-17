import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import NavBar from './Navbar';
import ScreenContainer from '../containers/ScreenContainer';
import styles from '../styles/main';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.appContainer}>
          <ScreenContainer />
          <NavBar />
        </View>
      </Provider>
    );
  }
}
