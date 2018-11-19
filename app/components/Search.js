import React from 'react';
import { View, FlatList } from 'react-native';
import { Article } from './CustomComponents';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import screenStyles from '../styles/_components/Screens';

const Search = props => {
  return (
    <View style={screenStyles.screen}>

      <SearchBoxContainer />

      {props.results && props.results.length > 0 && (
        <FlatList
          style={{width: '100%'}}
          data={[...props.results]}
          renderItem={({item, index}) => 
            <Article 
              headline={item.title.length > 60 ? item.title.slice(0, 55) + '...' : item.title} 
              source={props.sources.get(item.source)} 
              url = {item.url}
            />}
        />
      )}

    </View>
  )
}

export default Search;