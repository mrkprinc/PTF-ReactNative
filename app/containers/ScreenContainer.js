import React from 'react';
import { connect } from 'react-redux';
import TopSources from '../components/TopSources';

const mapStateToProps = state => {
  return {
    screen: state.screen
  }
}

const Screen = (props) => {
  switch(props.screen) {
    default: 
      return <TopSources />
  }
}

export default connect(mapStateToProps)(Screen);