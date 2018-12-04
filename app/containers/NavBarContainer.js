import { connect } from 'react-redux';
import NavBar from '../components/Navbar';
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);