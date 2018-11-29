import { connect } from 'react-redux';
import { getTopSources } from '../actions/getSources';
import TopSources from '../components/TopSources';

mapStateToProps = state => {
  return { status, sources } = state.topSources;
}

mapDispatchToProps = dispatch => {
  return {
    getTopSources: () => {
      dispatch(getTopSources());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSources);