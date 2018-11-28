import React from 'react';
import { View, Animated } from 'react-native';
import { Button } from './CustomComponents';
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
      <View style={styles.container}>
        <Button 
          text={'⚙'} 
          inheritStyle={{flex: 0, backgroundColor: 'none'}} 
          onPress={() => this.toggleExpand()}
        />

        {this.state.expanded && (
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button text={'Articles'} inheritStyle={styles.button} onPress={this.props.goToSearch} />
            <Button text={'Top Sources'} inheritStyle={styles.button} onPress={this.props.goToTopSources} />
          </View>
        )}
      </View>
    )
  }
}

export default NavBar;