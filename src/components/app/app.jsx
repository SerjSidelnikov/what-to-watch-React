import Main from '../main/main.jsx';

const handleClick = () => {};

const App = (props) => {
  const {movies} = props;

  return (
    <Main
      movies={movies}
      onClick={handleClick}
    />
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
