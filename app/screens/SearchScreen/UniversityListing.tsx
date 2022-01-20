/*
 *
 * UniversityListing
 *
 */

import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import FormattedMessage from 'theme/FormattedMessage';
import FlatList from 'theme/FlatList';

import messages from './messages';
import style from './style';
import { Universities } from './data';

type UniversityListingProps = {
  country: string;
};

const UniversityListing: React.FC<UniversityListingProps> = (_props) => {
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
      <FlatList
        data={Universities || []}
        style={style.list}
        contentContainerStyle={style.listContent}
        renderItem={renderItem}
        itemHeight={200}
        forceNonDeterministicRendering
      />
    </Animatable.View>
  );
};

export default React.memo(UniversityListing);
