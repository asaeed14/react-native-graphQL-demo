/*
 *
 * SearchScreen
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';
import Screen from 'theme/Screen';
import InputDropDown from 'theme/InputDropDown';

import { SearchScreenProps } from './types';
import messages from './messages';
import style from './style';
import UniversityListing from './UniversityListing';

const COUNTRIES = [
  {
    id: 1,
    label: 'Pakistan',
  },
  {
    id: 2,
    label: 'France',
  },
  {
    id: 3,
    label: 'United States',
  },
  {
    id: 4,
    label: 'Germany',
  },
];

const SearchScreen: React.FC<SearchScreenProps> = (_props) => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  return (
    <Screen
      testID="SearchScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
      useScrollView={false}
    >
      <View style={style.inputHolder}>
        <InputDropDown
          label={<FormattedMessage isFragment {...messages.countryLabel} />}
          placeHolder={
            <FormattedMessage isFragment {...messages.countryLabel} />
          }
          data={COUNTRIES.map((item) => ({
            key: item.id.toString(),
            ...item,
          }))}
          title={<FormattedMessage isFragment {...messages.countryLabel} />}
          selectedValue={selectedCountry?.label}
          onSelect={(item) => {
            setSelectedCountry(item);
          }}
        />
      </View>
      {selectedCountry ? <UniversityListing country={selectedCountry} /> : null}
    </Screen>
  );
};

export default React.memo(SearchScreen);
