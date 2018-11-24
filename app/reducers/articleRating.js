import { HIDE_MODAL, SHOW_MODAL } from '../actions/rateArticle';

export const modal = (state = {
  show: false
}, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        show: true 
      }
    case HIDE_MODAL:
      return {
        show: false
      }
    default:
      return state;
  }
}