import { GOT_SOURCES } from '../actions/getSources';

export default reducer = (state = {screen: 'SEARCH', search: {expanded: false}}, action) => {
  switch(action.type) {
    case GOT_SOURCES:
      return {
        ...state,
        sources: action.sources
      }
    default: 
      return state;
  }
}