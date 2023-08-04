import RootNavigator from '@navigation/RootNavigator';
import store from '@store/index';
import React from 'react';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
