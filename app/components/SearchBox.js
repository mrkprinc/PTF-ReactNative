import React from 'react';
import { View, TextInput, Picker } from 'react-native';
import { Heading, Button, Text } from './CustomComponents';
import screenStyles from '../styles/_components/Screens';
import styles from '../styles/main';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      searchSource: 'none'
    }
  }

  clearSearch() {
    this.setState({searchInput: ''});
    this.setState({searchSource: 'none'});
  }

  componentDidMount() {
    if(!this.props.sources) {
      this.props.getSources();
    }
  }

  getPickerItems() {
    let items = [];
    if(this.props.sources) {
      for(let [id, name] of this.props.sources) {
        let item = <Picker.Item label={name} value={id} key={id} />
        items.push(item);
      }
    }
    return items;
  }

  render() {
    if(this.props.expanded) {

      let sources = [
        <Picker.Item label='Select source (optional)' value='none' key={-1} />,
        ...this.getPickerItems()
      ];

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
            {sources}
          </Picker>
          <View style={{flexDirection: 'row', width: '90%'}}>
            <Button 
              text='Search' 
              onPress={e => {
                this.clearSearch();
                this.props.searchArticles(this.state);
              }
            } 
            />
            <Button text='Clear' onPress={e => this.clearSearch()} />
          </View>
        </View>
      )
    }
  
    else return (
      <View style={screenStyles.section}>
        <Button 
          text='Start a New Search' 
          inheritStyle={{backgroundColor: 'none', flex: 0}}
          onPress={e => this.props.searchReset()}
        >
        </Button>
      </View>
    )
  }
}

export default SearchBox;