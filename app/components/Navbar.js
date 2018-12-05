import React from 'react';
import { View } from 'react-native';
import { Button } from './CustomComponents';
import NavMenuContainer from '../containers/NavMenuContainer';
import styles from '../styles/_components/NavBar';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }

  toggleExpand() {
    let toggle = this.state.expanded ? false : true;
    this.setState({ expanded: toggle });
  }

  render() {
    return (
      <View style={[styles.container, !this.state.expanded && { opacity: 0.5 }]}>
        <Button 
          text={'⚙'} 
          inheritStyle={{flex: 0, backgroundColor: 'none'}} 
          onPress={() => this.toggleExpand()}
        />

        {this.state.expanded && (
          <NavMenuContainer />
        )}
      </View>
    )
  }
}

export default NavBar;