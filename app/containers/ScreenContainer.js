import React from 'react';
import { connect } from 'react-redux';
import { screens } from '../actions/navigate';
import TopSourcesContainer from '../containers/TopSourcesContainer';
import SearchContainer from '../containers/SearchContainer';

const mapStateToProps = state => {
  return {
    screen: state.screen
  }
}

const Screen = (props) => {
  switch(props.screen) {
    case screens.TOP_SOURCES:
      return <TopSourcesContainer />
    case screens.SEARCH:
      return <SearchContainer />
    default: 
      return <SearchContainer />
  }
}

export default connect(mapStateToProps)(Screen);