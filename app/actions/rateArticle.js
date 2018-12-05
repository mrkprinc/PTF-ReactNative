import { ApiError } from "../errors";

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SET_RATING = 'SET_RATING';
export const RATING_CALL = 'RATING_CALL';
export const RATING_RESPONSE = 'RATING_RESPONSE';

export const showModal = (source, url) => {
  return {
    type: SHOW_MODAL,
    source,
    url
  }
}

export const setRating = (category, rating) => {
  return {
    type: SET_RATING,
    category,
    rating
  }
}

export const submitRatings = ratingsData => {
  return dispatch => {
    try {
      dispatch(ratingCall());
      fetch('https://infinite-inlet-48108.herokuapp.com/api/srating', {
        method: 'POST',
        body: JSON.stringify(ratingsData),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).then(response => {
        if(!response.ok) { throw new ApiError(); }
        else {
          dispatch(ratingResponse(ratingsData.url));
        }
      }).catch(err => { throw new ApiError(); })
    } catch(err) { console.log(err.msg); };
  }
}

const ratingCall = () => {
  return {
    type: RATING_CALL
  }
}

const ratingResponse = url => {
  return {
    type: RATING_RESPONSE,
    url
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  }
}

