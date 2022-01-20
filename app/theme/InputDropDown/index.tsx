/**
 *
 * InputDropDown
 *
 */
import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';

import TouchFeedback from 'theme/TouchFeedback';
import Text from 'theme/Text';
import Icon from 'theme/Icon';

import DropdownModal from './DropdownModal';
import ListItem from './ListItem';
import style from './style';
import { DataProps } from './types';

type InputDropDownProps = {
  data?: DataProps[];
  label: any;
  onSelect: (...args: any[]) => any;
  onChangeState?: (...args: any[]) => any;
  disabled?: boolean;
  selectedValue?: any;
  selectionProperty?: string;
  title: object;
  limit?: number;
  error?: string | React.ReactNode;
  placeHolder?: string | React.ReactNode;
};

const InputDropDown: React.FC<InputDropDownProps> = ({
  onChangeState = () => {},
  limit = 10,
  ...props
}) => {
  const [showList, setShowList] = useState(false);

  const onSelect = (v) => {
    props.onSelect(v);
    setShowList(false);
  };

  useEffect(() => {
    onChangeState(showList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showList]);

  const onPress = () => {
    if (props.disabled) {
      return;
    }
    setShowList(!showList);
  };

  return (
    <>
      <Text animated style={[style.label]}>
        {props.label}
      </Text>
      <TouchFeedback onPress={onPress} style={style.container}>
        {props.selectedValue ? (
          <Text animated style={style.selectedValue} numberOfLines={1}>
            {props.selectedValue}
          </Text>
        ) : (
          <>
            {props.placeHolder ? (
              <Text style={style.placeholder}>{props.placeHolder}</Text>
            ) : (
              <Text />
            )}
          </>
        )}
        <Icon
          name={showList ? 'chevron-up' : 'chevron-down'}
          style={style.dropDownIcon}
        />
      </TouchFeedback>
      {props.error ? <Text style={style.error}>{props.error}</Text> : null}
      {showList && props.data && props.data.length > 0 ? (
        <>
          {props?.data?.length > limit ? (
            <DropdownModal
              onRequestClose={() => setShowList(false)}
              selectedValue={props.selectedValue}
              data={props.data}
              onSelect={props.onSelect}
              selectionProperty={props.selectionProperty}
              title={props.title}
            />
          ) : (
            <Animatable.View useNativeDriver animation="fadeIn" duration={1000}>
              <FlatList
                key="l"
                style={style.list}
                data={props.data}
                bounces={false}
                keyboardShouldPersistTaps="always"
                renderItem={({ item: v, index }) => (
                  <ListItem
                    data={v}
                    isLast={
                      !props?.data?.length || index === props.data.length - 1
                    }
                    onSelect={() => {
                      onSelect(v);
                    }}
                  />
                )}
              />
            </Animatable.View>
          )}
        </>
      ) : null}
    </>
  );
};
export default InputDropDown;
