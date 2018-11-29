import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import NavBarContainer from './app/containers/NavBarContainer';
import ScreenContainer from './app/containers/ScreenContainer';
import styles from './app/styles/main';
import rootReducer from './app/reducers/';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.appContainer}>
          <ScreenContainer />
          <NavBarContainer />
        </View>
      </Provider>
    );
  }
}