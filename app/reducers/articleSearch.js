import { searchStatus, SEARCH_RESET, SEARCH_RESULTS, SEARCH_CALL } from '../actions/searchArticles';

export const search = (state = {
  results: [],
  status: searchStatus.COMPLETE
}, action) => {
  switch(action.type) {
    case SEARCH_RESET:
      return {
        results: [], 
        status: searchStatus.COMPLETE
      }
    case SEARCH_CALL:
      return {
        ...state, 
        status: searchStatus.IN_PROGRESS
      }
    case SEARCH_RESULTS:
      return {
        results: action.data, 
        status: searchStatus.COMPLETE
      }
    default:
      return state;
  }
}