import React from 'react';
import { View } from 'react-native';
import { Button } from './CustomComponents';
import { screens } from '../actions/navigate';
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

  navigate(destination) {
    if(this.props.currentScreen !== destination) {
      this.props.goTo(destination);
      this.setState({ expanded: false });
    }
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
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button 
              text='Articles' inheritStyle={styles.button} 
              onPress={() => this.navigate(screens.SEARCH)}
              disabled={true} />

            <Button 
              text={'Top Sources'} inheritStyle={styles.button} 
              onPress={() => this.navigate(screens.TOP_SOURCES)} />
          </View>
        )}
      </View>
    )
  }
}

export default NavBar;