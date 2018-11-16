import React from 'react';
import { View, TextInput, Picker } from 'react-native';
import { Heading, Button, Text } from './CustomComponents';
import screenStyles from '../styles/_components/Screens';
import styles from '../styles/NativeComponents';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      searchSource: -1
    }
  }

  render() {
    if(this.props.expanded) {
      return (
        <View style={screenStyles.section}>
          <Heading>Search Articles</Heading>
          <TextInput 
            style={styles.input} 
            placeholder='Keywords' 
            value={this.state.searchInput}
            onChangeText={text => this.setState({searchInput: text})}
          />
          <Picker 
            style={styles.input} 
            mode='dropdown' 
            selectedValue={this.state.searchSource}
            onValueChange={value => this.setState({searchSource: value})}
          >
            <Picker.Item label='Select source (optional)' value={-1} />
            <Picker.Item label='New York Times' value={1} />
          </Picker>
          <View style={{flexDirection: 'row', width: '90%'}}>
            <Button text='Search' />
            <Button text='Clear' />
          </View>
        </View>
      )
    }
  
    else return (
      <View style={screenStyles.section}>
        <Text>Start a New Search</Text>
      </View>
    )
  }
}

export default SearchBox;