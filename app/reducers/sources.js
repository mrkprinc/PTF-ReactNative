import { GOT_SOURCES, GOT_TOPSOURCES, status } from '../actions/getSources';

export const sources = (state = {sources: null, status: status.IN_PROGRESS}, action) => {
  switch(action.type) {
    case GOT_SOURCES:
      return {
        sources: action.sources,
        status: status.COMPLETE
      };
    default: 
      return state;
  }
}

export const topSources = (state = {sources: null, status: status.IN_PROGRESS}, action) => {
  switch(action.type) {
    case GOT_TOPSOURCES:
      return {
        sources: action.sources,
        status: status.COMPLETE
      };
    default:
      return state;
  }
}