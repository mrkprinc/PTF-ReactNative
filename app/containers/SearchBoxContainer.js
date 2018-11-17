import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { getSources } from '../actions/getSources';

const mapStateToProps = state => {
  return {
    expanded: state.search.expanded,
    sources: state.sources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSources: () => {
      dispatch(getSources());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);