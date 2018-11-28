import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { getSources } from '../actions/getSources';
import { searchArticles, searchReset } from '../actions/searchArticles';

const mapStateToProps = state => {
  return {
    expanded: state.search.results && state.search.results.length > 0 ? false: true,
    sources: state.sources.sources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSources: () => {
      dispatch(getSources());
    },
    searchArticles: componentState => {
      dispatch(searchArticles(componentState))
    },
    searchReset: () => {
      dispatch(searchReset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);