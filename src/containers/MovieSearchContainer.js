import { connect } from 'react-redux'
import MovieSearch from '../components/MovieSearch';
import { setMovieString, fetchMovies } from '../actions';

export const mapStateToProps = reduxState => {
  return {
    movieString: reduxState.movieInput
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    handleChange: movieString => dispatch(setMovieString(movieString)),
    submitSearch: movieString => dispatch(fetchMovies(movieString))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch);
