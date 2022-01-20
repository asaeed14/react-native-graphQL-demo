import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

import Icon from 'theme/Icon';
import Text from 'theme/Text';
import Colors from 'theme/Colors';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

type RadioProps = {
  active: boolean;
  label?: string | React.ReactNode;
  onPress: (...args: any[]) => any;
  type?: 'checkbox' | 'radio';
};

const Radio: React.FC<RadioProps> = ({ type = 'radio', ...props }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: props.active ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [animation, props.active]);

  return (
    <TouchFeedback onPress={props.onPress} style={style.container}>
      {props.label && (
        <Text style={[style.label, props.active && style.activeLabel]}>
          {props.label}
        </Text>
      )}
      {type !== 'radio' ? (
        <Animated.View
          style={[
            style.square,
            {
              borderColor: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [Colors.textBlack, Colors.accent],
              }),
            },
          ]}
        >
          <Animated.View
            style={[
              style.innerSquare,
              {
                transform: [
                  {
                    scale: animation,
                  },
                ],
                opacity: animation,
              },
            ]}
          >
            <Icon name="check" size={12} color={Colors.accentReverse} />
          </Animated.View>
        </Animated.View>
      ) : (
        <Animated.View
          style={[
            style.circle,
            {
              borderColor: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [Colors.textBlack, Colors.accent],
              }),
            },
          ]}
        >
          <Animated.View
            style={[
              style.innerCircle,
              {
                transform: [
                  {
                    scale: animation,
                  },
                ],
                opacity: animation,
              },
            ]}
          />
        </Animated.View>
      )}
    </TouchFeedback>
  );
};

export default Radio;
