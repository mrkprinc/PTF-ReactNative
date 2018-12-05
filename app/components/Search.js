import React from 'react';
import { View, FlatList } from 'react-native';
import { Article, Text } from './CustomComponents';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import RatingModalContainer from '../containers/RatingModalContainer';
import { searchStatus } from '../actions/searchArticles';
import screenStyles from '../styles/_components/Screens';
import { colours, units } from '../styles/global';

const Search = props => {
  return (
    <View style={screenStyles.screen}>

      <SearchBoxContainer />

      {props.status === searchStatus.IN_PROGRESS && (
        <Text inheritStyle={{color: colours.white, padding: units.em}}>Searching...</Text>
      )}

      {props.results && props.results.length > 0 && (
        <FlatList
          style={{width: '100%'}}
          data={[...props.results]}
          renderItem={({item, index}) => 
            <Article 
              headline={item.title} 
              sourceName={props.sources.get(item.source)} 
              source={item.source}
              url = {item.url}
              alreadyRated = {props.alreadyRated.includes(item.url)}
              showModal = {props.showModal}
            />}
        />
      )}

      <RatingModalContainer />
    </View>
  )
}

export default Search;