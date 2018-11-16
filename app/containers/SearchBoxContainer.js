import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';

const mapStateToProps = state => {
  return {
    expanded: state.search.expanded
  }
}

export default connect(mapStateToProps)(SearchBox);