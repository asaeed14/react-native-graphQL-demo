import React from 'react';
import TouchFeedback from 'theme/TouchFeedback';
import Text from 'theme/Text';
import Image, { IImageProps } from 'theme/Image';
import Icon from 'theme/Icon';
import style from './style';
import { DataProps } from './types';

type ListItemProps = {
  data: DataProps;
  onSelect: (...args: any[]) => any;
  isLast?: boolean;
  image?: IImageProps;
};

const ListItem: React.FC<ListItemProps> = (props) => {
  if (!props.data) {
    return null;
  }
  console.log('data');
  return (
    <TouchFeedback
      style={[
        style.listItemContainer,
        props.isLast ? style.listItemContainerLast : {},
      ]}
      onPress={() => props.onSelect(props)}
    >
      {props.data.image ? (
        <Image
          {...props.data.image}
          style={style.listItemImage}
          resizeMode="cover"
        />
      ) : null}
      {props.data.icon ? (
        <Icon name={props.data.icon} style={style.listItemIcon} />
      ) : null}

      <Text style={style.listItemName}>{props.data.label}</Text>
    </TouchFeedback>
  );
};
export default ListItem;
