import { HIDE_MODAL, SHOW_MODAL, SET_RATING } from '../actions/rateArticle';
import { RATING_RESPONSE } from '../actions/rateArticle';

export const modal = (state = {
  show: false,
  ratings: {credible: 5, accurate: 5, relevant: 5}
}, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        show: true,
        source: action.source,
        url: action.url,
        ratings: { credible: 5, accurate: 5, relevant: 5}
      }
    case SET_RATING:
      return {
        ...state,
        ratings: {
          ...ratings,
          [action.category]: action.rating
        }
      }
    case HIDE_MODAL:
    case RATING_RESPONSE:
      return {
        ...state,
        show: false,
      }
    default:
      return state;
  }
}

export const alreadyRated = (state = [], action) => {
  switch(action.type) {
    case RATING_RESPONSE:
      return [...state, action.url];
    default:
      return state;
  }
}