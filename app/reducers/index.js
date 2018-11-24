import { combineReducers } from 'redux';
import search from './articleSearch';
import { modal } from './articleRating';
import { GOT_SOURCES } from '../actions/getSources';

const screen = (state = 'SEARCH', action) => {
  switch(action.type) {
    default: 
      return state;
  }
}

const sources = (state = null, action) => {
  switch(action.type) {
    case GOT_SOURCES:
      return action.sources;
    default: 
      return state;
  }
}

export default combineReducers({ search, modal, screen, sources });