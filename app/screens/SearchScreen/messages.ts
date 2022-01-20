/*
 * SearchScreen Messages
 *
 * This contains all the text for the SearchScreen component.
 *
 */

import { defineMessages } from 'react-intl';
const scope = 'app.screens.SearchScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Search',
  },
  countryLabel: {
    id: `${scope}.countryLabel`,
    defaultMessage: 'Select Country',
  },
  itemNameLabel: {
    id: `${scope}.itemNameLabel`,
    defaultMessage: 'Name: {name}',
  },
  itemDomainLabel: {
    id: `${scope}.itemDomainLabel`,
    defaultMessage: 'Domain: {domain}',
  },
  itemWebLabel: {
    id: `${scope}.itemWebLabel`,
    defaultMessage: 'Website: {web}',
  },
});
