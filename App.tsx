/**
 *
 * Universities Search
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AppContainer from './app/containers/App';
import LanguageProvider from './app/containers/LanguageProvider';

import { translationMessages } from './app/i18n';

import configureStore from './app/configureStore';

enableScreens();

const initialState = {};
const store = configureStore(initialState);

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <ApolloProvider client={client}>
          <AppContainer />
        </ApolloProvider>
      </LanguageProvider>
    </Provider>
  );
}

export default App;
