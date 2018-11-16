import React from 'react';
import { View, TextInput, Picker } from 'react-native';
import { Heading, Button, Article } from './CustomComponents';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import screenStyles from '../styles/_components/Screens';

const Search = props => {
  return (
    <View style={screenStyles.screen}>

      <SearchBoxContainer />

      <Article />
      <Article />

    </View>
  )
}

export default Search;