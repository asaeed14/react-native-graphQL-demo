/*
 *
 * SearchScreen
 *
 */

import React from 'react';

import FormattedMessage from 'theme/FormattedMessage';
import Screen from 'theme/Screen';
import Text from 'theme/Text';

import { SearchScreenProps } from './types';

import messages from './messages';

const SearchScreen: React.FC<SearchScreenProps> = (_props) => (
  <Screen
    testID="SearchScreen"
    headerTitle={<FormattedMessage {...messages.title} isFragment />}
  >
    <Text>Welcome</Text>
  </Screen>
);

export default React.memo(SearchScreen);
