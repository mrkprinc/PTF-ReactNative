export const GOT_SOURCES = 'GOT_SOURCES';

export const getSources = () => {
  return dispatch => {
    fetch('https://infinite-inlet-48108.herokuapp.com/api/sources').then(response => {
      if(response.ok) {
        response.json().then(data => {
          if(data.sources) {
            let sources = new Map();
            data.sources.forEach(source => sources.set(source.id, source.name));
            dispatch(gotSources(sources));
          }
        })
      }
    })
  }
}

const gotSources = sources => {
  return {
    type: GOT_SOURCES,
    sources
  }
}
