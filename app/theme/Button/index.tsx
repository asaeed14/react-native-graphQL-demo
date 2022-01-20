/**
 *
 * Button
 *
 */
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import Text from 'theme/Text';
import Icon from 'theme/Icon';
import Image, { IImageProps } from 'theme/Image';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

const typeBackground = {
  primary: style.primaryButton,
  accent: style.accentButton,
  tertiary: style.tertiaryButton,
};
const typeForeground = {
  primary: style.primaryForeground,
  accent: style.accentForeground,
  tertiary: style.tertiaryForeground,
};

interface ButtonProps {
  onPress: (...args: any[]) => any;
  icon?: string;
  image?: IImageProps;
  label: string | React.ReactNode;
  isFilled?: boolean;
  mini?: boolean;
  flex?: boolean;
  type?: 'primary' | 'accent' | 'tertiary';
  disabled?: boolean;
  large?: boolean;
  trailingIcon?: boolean;
  [x: string]: any;
}
const Button: React.FC<ButtonProps> = ({
  isFilled = true,
  type = 'primary',
  disabled = false,
  onPress,
  ...props
}) => {
  const animatedValue = useRef(new Animated.Value(disabled ? 0.5 : 1)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: disabled ? 0.5 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue, disabled]);

  return (
    <TouchFeedback
      animated
      onPress={disabled ? () => null : onPress}
      style={[
        style.button,
        props.large ? style.large : {},
        props.flex ? style.flex : {},
        {
          opacity: animatedValue,
          ...typeBackground[type],
        },
      ]}
    >
      {props.icon && !props.trailingIcon ? (
        <Icon
          name={props.icon}
          style={[
            style.icon,
            typeForeground[type],
            props.large ? style.largeIcon : {},
          ]}
        />
      ) : null}

      {props.image ? <Image style={style.image} {...props.image} /> : null}

      <Text
        style={[
          style.label,
          typeForeground[type],
          props.large ? style.largeLabel : {},
        ]}
        numberOfLines={2}
      >
        {props.label}
      </Text>
    </TouchFeedback>
  );
};

export default Button;
