import debounce from 'lodash/debounce';

import React from 'react';
import { StatusBar } from 'react-native';

import Router from 'router';

import Colors from 'theme/Colors';

function onStateChange(_state) {}

const debouncedOnStateChange = debounce(onStateChange, 200);

function AppContainer() {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.statusBar}
        barStyle="light-content"
        translucent
      />
      <Router onStateChange={debouncedOnStateChange} />
    </>
  );
}

export default AppContainer;
