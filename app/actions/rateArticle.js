export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SET_RATING = 'SET_RATING';

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
    fetch('https://infinite-inlet-48108.herokuapp.com/api/srating', {
      method: 'POST',
      body: JSON.stringify(ratingsData),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(response => {
      if(!response.ok) console.log(response.status);
      else dispatch(hideModal());
    })
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  }
}

