import { GOT_SOURCES } from '../actions/getSources';
import { searchStatus, SEARCH_RESET, SEARCH_RESULTS, SEARCH_CALL } from '../actions/searchArticles';

export default reducer = (state = {
  screen: 'SEARCH', 
  search: {
    results: [],
    status: searchStatus.COMPLETE
  }
}, action) => {
  switch(action.type) {
    case GOT_SOURCES:
      return {
        ...state,
        sources: action.sources
      }
    case SEARCH_RESET:
      return {
        ...state,
        search: {results: [], status: searchStatus.COMPLETE}
      }
    case SEARCH_CALL:
      return {
        ...state,
        search: {...state.search, status: searchStatus.IN_PROGRESS}
      }
    case SEARCH_RESULTS:
      return {
        ...state,
        search: {results: action.data, status: searchStatus.COMPLETE}
      }
    default: 
      return state;
  }
}