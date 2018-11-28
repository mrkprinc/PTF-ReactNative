import React from 'react';
import { connect } from 'react-redux';
import { screens } from '../actions/navigate';
import { unfreeze } from '../actions/freeze';
import TopSourcesContainer from '../containers/TopSourcesContainer';
import SearchContainer from '../containers/SearchContainer';

const mapStateToProps = state => {
  return {
    screen: state.screen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    unfreeze: () => {
      dispatch(unfreeze())
    }
  }
}

class Screen extends React.Component {
  componentDidUpdate() {
    this.props.unfreeze();
  }

  render() {
    switch(this.props.screen) {
      case screens.TOP_SOURCES:
        return <TopSourcesContainer />
      case screens.SEARCH:
        return <SearchContainer />
      default: 
        return <SearchContainer />
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);