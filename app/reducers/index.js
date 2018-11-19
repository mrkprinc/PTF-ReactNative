import { GOT_SOURCES } from '../actions/getSources';
import { SEARCH_RESULTS } from '../actions/searchArticles';

export default reducer = (state = {
  screen: 'SEARCH', 
  search: {
    results: []
  }
}, action) => {
  switch(action.type) {
    case GOT_SOURCES:
      return {
        ...state,
        sources: action.sources
      }
    case SEARCH_RESULTS:
      return {
        ...state,
        search: {results: action.data}
      }
    default: 
      return state;
  }
}