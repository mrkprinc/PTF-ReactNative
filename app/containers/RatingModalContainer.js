import { connect } from 'react-redux';
import RatingModal from '../components/RatingModal';
import { hideModal, setRating, submitRatings } from '../actions/rateArticle';

const mapStateToProps = state => {
  return (
    { show, source, url, ratings } = state.modal
  )
}

const mapDispatchToProps = dispatch => {
  return {
    submitRatings: ratingsData => {
      dispatch(submitRatings(ratingsData));
    },
    closeModal: () => {
      dispatch(hideModal());
    },
    setRating: (category, rating) => {
      dispatch(setRating(category, rating));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingModal);