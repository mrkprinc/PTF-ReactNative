import { connect } from 'react-redux';
import TopSources from '../components/TopSources';

mapStateToProps = state => {
  return {
    status: 'COMPLETE'
  }
}

mapDispatchToProps = dispatch => {
  return {
    getTopSources: () => {}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSources);