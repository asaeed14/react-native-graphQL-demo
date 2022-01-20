import React, { useEffect } from 'react';
import { View, StatusBar, Animated } from 'react-native';
import Colors from 'theme/Colors';

import Text from 'theme/Text';

import BackButton from './BackButton';
import style from './style';

interface HeaderProps {
  title?: React.ReactNode | string;
  onBackPress?: (...args: any[]) => any;
  visibleValue: Animated.Value;
  blockBackPress?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  return (
    <Animated.View
      style={[
        style.header,
        {
          backgroundColor: props.visibleValue.interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.transparent, Colors.headerBackground],
          }),
          borderBottomColor: props.visibleValue.interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.transparent, Colors.headerBackground],
          }),
        },
      ]}
      key="header"
    >
      <View style={[style.headerContent]}>
        {!props.blockBackPress ? <BackButton {...props} /> : null}
        <Text
          animated
          style={[
            style.title,
            {
              opacity: props.visibleValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ]}
          numberOfLines={1}
        >
          {props.title}
        </Text>
      </View>
    </Animated.View>
  );
};

export default React.memo(Header);
