import { combineReducers } from 'redux';
import search from './articleSearch';
import { modal } from './articleRating';
import { GOT_SOURCES } from '../actions/getSources';
import { screens, NAVIGATE } from '../actions/navigate';

const screen = (state = screens.SEARCH, action) => {
  switch(action.type) {
    case NAVIGATE:
      return action.screen;
    default: 
      return state;
  }
}

const sources = (state = {sources: null, status: 'COMPLETE'}, action) => {
  switch(action.type) {
    case GOT_SOURCES:
      return {
        sources: action.sources,
        status: 'COMPLETE'
      };
    default: 
      return state;
  }
}

export default combineReducers({ search, modal, screen, sources });