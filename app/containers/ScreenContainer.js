import React from 'react';
import { connect } from 'react-redux';
import { screens } from '../actions/navigate';
import { unfreeze } from '../actions/freeze';
import TopSourcesContainer from './TopSourcesContainer';
import SearchContainer from './SearchContainer';
import SomethingWentWrong from '../components/SomethingWentWrong';

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
  constructor() {
    super();
    this.state = { renderError: false };
  }

  componentDidUpdate() {
    this.props.unfreeze();
  }

  componentDidCatch(err, info) {
    console.log('catch')
    this.setState({ renderErr: true });
  }

  render() {
    if(!this.state.renderError) {
      switch(this.props.screen) {
        case screens.TOP_SOURCES:
          return <TopSourcesContainer />
        case screens.SEARCH:
          return <SearchContainer />
        default: 
          return <SearchContainer />
      }
    } else {
      return <SomethingWentWrong />
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);