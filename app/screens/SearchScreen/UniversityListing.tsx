/*
 *
 * UniversityListing
 *
 */

import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useQuery } from '@apollo/client';

import FormattedMessage from 'theme/FormattedMessage';
import QueryResult from 'theme/QueryResult';
import FlatList from 'theme/FlatList';

import messages from './messages';
import style from './style';

import UniversityListingLoader from './Loader';
import { GET_UNIVERSITIES } from './quires';

type UniversityListingProps = {
  country: {
    id: number;
    label: string;
  };
};

const UniversityListing: React.FC<UniversityListingProps> = ({ country }) => {
  const { loading, error, data } = useQuery(GET_UNIVERSITIES, {
    variables: { countryName: country.label },
  });

  const renderItem = (_type, item) => (
    <View style={style.itemWrapper} key={item.id}>
      <FormattedMessage
        style={[style.itemLabel, style.itemName]}
        {...messages.itemNameLabel}
        values={{ name: item.name }}
      />
      <FormattedMessage
        style={[style.itemLabel, style.itemDomain]}
        {...messages.itemDomainLabel}
        values={{ domain: item.domains[0] }}
      />
      <FormattedMessage
        style={[style.itemLabel, style.itemWeb]}
        {...messages.itemWebLabel}
        values={{ web: item.web_pages }}
      />
    </View>
  );

  return (
    <Animatable.View style={style.listContainer} animation="fadeInDown">
      <QueryResult
        error={error}
        loading={loading}
        data={data?.universitiesOfCountry}
        Loader={<UniversityListingLoader numberOfItems={5} />}
      >
        <FlatList
          data={data?.universitiesOfCountry || []}
          style={style.list}
          contentContainerStyle={style.listContent}
          renderItem={renderItem}
          itemHeight={200}
          forceNonDeterministicRendering
        />
      </QueryResult>
    </Animatable.View>
  );
};

export default React.memo(UniversityListing);
