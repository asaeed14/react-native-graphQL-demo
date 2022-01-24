/**
 *
 * Loader
 *
 */
import React from 'react';
import { StyleSheet } from 'react-native';

import Text, { TextProps } from './Text';

import Colors from './Colors';
import Dimensions from './Dimensions';

const style = StyleSheet.create({
  container: {
    width: Dimensions.screenWidth - Dimensions.space4x,
    padding: Dimensions.space2x,
    marginHorizontal: Dimensions.space2x,
    color: Colors.errorBackground,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

interface IErrorProps extends TextProps {
  text: string | React.ReactNode;
}

function ErrorMessage({ text, ...otherProps }: IErrorProps) {
  return (
    <Text style={style.container} {...otherProps}>
      {text}
    </Text>
  );
}

export default React.memo(ErrorMessage);
