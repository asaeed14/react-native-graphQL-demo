/**
 *
 * Input
 *
 */
import omit from 'lodash/omit';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import Text from 'theme/Text';
import style, { inputStyleProps } from './style';

export interface InputProps extends TextInputProps {
  error?: string | React.ReactNode;
  label?: string | React.ReactNode;
  style?: object;
}

// @ts-ignore
const Input = React.forwardRef((props: InputProps, ref: React.RefObject) => (
  <>
    {props.label ? <Text style={style.label}>{props.label}</Text> : null}
    <TextInput
      clearButtonMode="unless-editing"
      {...inputStyleProps}
      blurOnSubmit
      {...omit(props, ['label', 'style', 'error'])}
      ref={ref}
      style={[
        style.input,
        props.style,
        props.label ? style.inputWithLabel : {},
        props.error ? style.errorInput : {},
        props.multiline ? style.multiline : {},
      ]}
    />
    {props.error ? <Text style={style.error}>{props.error}</Text> : null}
  </>
));

export default Input;
