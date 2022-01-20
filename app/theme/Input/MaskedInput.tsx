/**
 *
 * MaskedInput
 *
 */
import React from 'react';

import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
import Text from 'theme/Text';
import style, { inputStyleProps } from './style';
interface MaskedInput extends TextInputMaskProps {
  error?: string | React.ReactNode;
  label?: string | React.ReactNode;
}

const MaskedInput = React.forwardRef((props: MaskedInput, ref: any) => (
  <>
    {props.label ? <Text style={style.label}>{props.label}</Text> : null}
    <TextInputMask
      clearButtonMode="never"
      autoCompleteType="password"
      textContentType="password"
      importantForAutofill="yes"
      options={props.options}
      refInput={ref}
      {...inputStyleProps}
      blurOnSubmit
      style={[
        style.input,
        props.label ? style.inputWithLabel : {},
        props.error ? style.errorInput : {},
        props.multiline ? style.multiline : {},
      ]}
      {...props}
    />
    {props.error ? <Text style={style.error}>{props.error}</Text> : null}
  </>
));

export default MaskedInput;
