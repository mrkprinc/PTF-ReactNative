import { ApiError } from '../errors';

export const GOT_SOURCES = 'GOT_SOURCES';
export const GOT_TOPSOURCES = 'GOT_TOPSOURCES';
export const status = {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETE: 'COMPLETE'
}

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

export const getTopSources = () => {
  return dispatch => {
    try {
      fetch('https://infinite-inlet-48108.herokuapp.com/api/toptenrating')
        .catch(err => { throw new ApiError(); })
        .then(response => {
          if(response.ok) {
            response.json()
              .catch(err => { throw new ApiError(); })
              .then(data => {
                let sources = data
                .filter(src => {
                  return src.totalusers > 0;
                })
                .map(src => {
                  return {
                    name: src.name,
                    description: src.description,
                    credibleScore: (src.credtotal / src.totalusers).toFixed(1),
                    accurateScore: (src.acctotal / src.totalusers).toFixed(1),
                    relevantScore: (src.reltotal / src.totalusers).toFixed(1)
                  }
                })
                dispatch(gotTopSources(sources));
              })
          } else throw new ApiError();
        })
    } catch(err) { 
      console.log(err.msg); 
    }
  }
}

const gotTopSources = sources => {
  return {
    type: GOT_TOPSOURCES,
    sources
  }
}
