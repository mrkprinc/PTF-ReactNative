import { ApiError } from '../errors';
export const GOT_SOURCES = 'GOT_SOURCES';

export const getSources = () => {
  return dispatch => {
    try {
      fetch('https://infinite-inlet-48108.herokuapp.com/api/sources').then(response => {
        if(response.ok) {
          response.json().then(data => {
            if(data.status === 'error') {throw new ApiError(data.message)}
            else if(data.sources) {
              let sources = new Map();
              data.sources.forEach(source => sources.set(source.id, source.name));
              dispatch(gotSources(sources));
            }
          }).catch(err => {throw new ApiError(); })
        } else throw new ApiError();
      }).catch(err => {throw new ApiError(); })
    } catch(err) {console.log(err.msg); }
  }
}

const gotSources = sources => {
  return {
    type: GOT_SOURCES,
    sources
  }
}
