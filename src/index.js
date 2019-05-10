import App from './components/app/app';
import films from './moks/films';

const init = () => {
  ReactDOM.render(
      <App
        movies={films}
      />,
      document.getElementById(`root`)
  );
};

init();
