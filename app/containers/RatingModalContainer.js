import { connect } from 'react-redux';
import RatingModal from '../components/RatingModal';
import { hideModal } from '../actions/rateArticle';

const mapStateToProps = state => {
  return {
    showModal: state.modal.show
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(hideModal());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingModal);