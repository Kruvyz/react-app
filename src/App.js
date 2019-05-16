import React from 'react';
import { hot } from 'react-hot-loader';
import WrapPages from './components/pages/WrapPages';

const App = () => {
  return (
    <React.Fragment>
      <WrapPages />
    </React.Fragment>
  );
};

export default hot(module)(App);
