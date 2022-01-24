import React from 'react';
import { ApolloError } from '@apollo/client';

import ErrorMessage from 'theme/ErrorMessage';
import FormattedMessage from 'theme/FormattedMessage';

import messages from './messages';
import style from './style';

type QueryResultProps = {
  loading: boolean;
  error: ApolloError | undefined;
  data: any;
  children: any;
  Loader: any;
};

const QueryResult = ({
  loading,
  error,
  data,
  Loader,
  children,
}: QueryResultProps) => {
  if (error) {
    return <ErrorMessage text={error.message} />;
  }
  if (loading) {
    return Loader;
  }

  if (!data.length) {
    return (
      <FormattedMessage
        {...messages.noDataFoundLabel}
        style={style.noDataFoundLabel}
      />
    );
  }
  if (data) {
    return children;
  }
};

export default QueryResult;
