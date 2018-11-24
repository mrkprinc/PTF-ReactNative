import { GOT_SOURCES } from '../actions/getSources';
import { searchStatus, SEARCH_RESET, SEARCH_RESULTS, SEARCH_CALL } from '../actions/searchArticles';
import { SHOW_MODAL, HIDE_MODAL } from '../actions/rateArticle';

export default reducer = (state = {
  screen: 'SEARCH', 
  search: {
    results: [],
    status: searchStatus.COMPLETE
  },
  modal: {
    show: false
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
    case SHOW_MODAL:
      return {
        ...state,
        modal: { show: true }
      }
    case HIDE_MODAL:
      return {
        ...state,
        modal: { show: false }
      }
    default: 
      return state;
  }
}