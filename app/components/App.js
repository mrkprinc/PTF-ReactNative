import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import NavBar from './Navbar';
import ScreenContainer from '../containers/ScreenContainer';
import styles from '../styles/_components/App';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ScreenContainer screen={store.getState()['screen']} />
          <NavBar />
        </View>
      </Provider>
    );
  }
}
