import { connect } from 'react-redux';
import NavMenu from '../components/NavMenu';
import { navigate } from '../actions/navigate';

const mapStateToProps = state => {
  return {
    currentScreen: state.screen
  };
}

const mapDispatchToProps = dispatch => {
  return {
    goTo: (destination) => {
      dispatch(navigate(destination));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);