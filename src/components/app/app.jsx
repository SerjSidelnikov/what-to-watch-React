import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = (props) => {
  const {movieNames} = props;

  return (
    <Main movieNames={movieNames}/>
  );
};

App.propTypes = {
  movieNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
