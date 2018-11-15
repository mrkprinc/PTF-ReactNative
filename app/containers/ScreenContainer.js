import React from 'react';
import { connect } from 'react-redux';
import { screens } from '../actions/Navigate';
import TopSources from '../components/TopSources';
import Search from '../components/Search';

const mapStateToProps = state => {
  return {
    screen: state.screen
  }
}

const Screen = (props) => {
  switch(props.screen) {
    case screens.TOP_SOURCES:
      return <TopSources />
    case screens.SEARCH:
      return <Search />
    default: 
      return <TopSources />
  }
}

export default connect(mapStateToProps)(Screen);