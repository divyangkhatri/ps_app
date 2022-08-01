import React from 'react';
import store from 'Redux/store';
import { Provider } from 'react-redux';

import MainNavigation from './src/navigations';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
