import { connect } from 'react-redux';
import NavBar from '../components/Navbar';
import { screens, navigate } from '../actions/navigate';

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    goToSearch: () => {
      dispatch(navigate(screens.SEARCH));
    },
    goToTopSources: () => {
      dispatch(navigate(screens.TOP_SOURCES));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);