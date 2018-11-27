import { connect } from 'react-redux';
import Search from '../components/Search';
import { showModal } from '../actions/rateArticle';

const mapStateToProps = state => {
  return {
    results: state.search.results.map((result, i) => Object.assign(result, {key: i.toString()})).slice(0, 12),
    sources: state.sources,
    status: state.search.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: (source, url) => {
      dispatch(showModal(source, url));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);