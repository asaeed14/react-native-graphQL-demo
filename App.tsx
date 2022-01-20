/**
 *
 * Universities Search
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import AppContainer from './app/containers/App';
import LanguageProvider from './app/containers/LanguageProvider';

import { translationMessages } from './app/i18n';

import configureStore from './app/configureStore';

enableScreens();

const initialState = {};
const store = configureStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <AppContainer />
      </LanguageProvider>
    </Provider>
  );
}

export default App;
