import { connect } from 'react-redux';
import Search from '../components/Search';

const mapStateToProps = state => {
  return {
    results: state.search.results.map((result, i) => Object.assign(result, {key: i.toString()})).slice(0, 12),
    sources: state.sources,
    status: state.search.status
  }
}

export default connect(mapStateToProps)(Search);