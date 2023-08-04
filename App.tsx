import RootNavigator from '@navigation/RootNavigator';
import store from '@store/index';
import React from 'react';
import {Platform, UIManager} from 'react-native';
import {Provider} from 'react-redux';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
