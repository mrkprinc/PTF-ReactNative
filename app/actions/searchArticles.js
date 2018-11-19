import { ApiError } from '../errors';

export const SEARCH_CALL = 'SEARCH_CALL';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const SEARCH_RESET = 'SEARCH_RESET';

export const searchStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETE: 'COMPLETE',
  ERROR: 'ERROR'
}

export function searchArticles(componentState) {
  return dispatch => {
    if(componentState.searchInput) {
      dispatch(searchCall());
      let url = `https://infinite-inlet-48108.herokuapp.com/api/article/${componentState.searchInput}`;
      if(componentState.searchSource !== 'none') url += `/${componentState.searchSource}`;
      fetch(url).then(response => {
        if(response.ok) {
          response.json().then(data => {
            if(data.message) throw new ApiError(data.message)
            else dispatch(searchResults(data));
          }).catch(err => {throw new ApiError(); });
        } else throw new ApiError();
      }).catch(err => {throw new ApiError(); });
    }
  }
}

function searchCall() {
  return {
    type: SEARCH_CALL,
  }
}

function searchResults(data) {
  return {
    type: SEARCH_RESULTS,
    data: data.filter(result => {return result.source; })
  }
}

export function searchReset() {
  return {
    type: SEARCH_RESET
  }
}