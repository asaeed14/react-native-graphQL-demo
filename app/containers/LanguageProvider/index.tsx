/*
 *
 * LanguageProvider
 *
 * This component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

interface LanguageProps {
  messages: object;
  children?: ReactNode;
}

export default function LanguageProvider(props: LanguageProps) {
  const stateSelector = createSelector(makeSelectLocale(), (locale) => ({
    locale,
  }));
  const { locale } = useSelector(stateSelector);
  return (
    <IntlProvider locale={locale} messages={props.messages[locale]}>
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};
