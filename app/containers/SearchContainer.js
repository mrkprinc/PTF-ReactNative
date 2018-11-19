import { connect } from 'react-redux';
import Search from '../components/Search';

const mapStateToProps = state => {
  return {
    results: state.search.results.map((result, i) => Object.assign(result, {key: i.toString()})),
    sources: state.sources
  }
}

export default connect(mapStateToProps)(Search);