import { combineReducers } from 'redux';
import search from './articleSearch';
import { modal } from './articleRating';
import { GOT_SOURCES } from '../actions/getSources';
import { screens, NAVIGATE } from '../actions/navigate';
import { UNFREEZE } from '../actions/freeze';
import { SEARCH_CALL, SEARCH_RESULTS } from '../actions/searchArticles';
import { RATING_CALL, RATING_RESPONSE } from '../actions/rateArticle';

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

const freeze = (state = false, action) => {
  console.log(action.type);
  switch(action.type) {
    case NAVIGATE:
    case SEARCH_CALL:
    case RATING_CALL:
      return true;
    case SEARCH_RESULTS:
    case RATING_RESPONSE:
    case UNFREEZE:
      return false;
    default: 
      return state;
  }
}

export default combineReducers({ search, modal, screen, sources, freeze });