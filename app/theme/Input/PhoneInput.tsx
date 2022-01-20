/**
 *
 * PhoneInput
 *
 */
import omit from 'lodash/omit';
import React, { useEffect, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import CountryPicker, {
  Flag,
  CountryCode,
} from 'react-native-country-picker-modal';
import Icon from 'theme/Icon';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import style, { inputStyleProps } from './style';

interface InitialStateProps {
  showCountryPicker: boolean;
  countryCode: CountryCode;
  callingCode: string;
}

const initialState: InitialStateProps = {
  showCountryPicker: false,
  countryCode: 'PK',
  callingCode: '+92',
};

export interface PhoneInputProps extends TextInputProps {
  error?: string | React.ReactNode;
  label?: string | React.ReactNode;
  onChangeText: (...arg: any) => any;
  style?: object;
}

const PhoneInput = React.forwardRef(
  // @ts-ignore
  (props: PhoneInputProps, ref: React.RefObject) => {
    const [state, set] = useState({
      ...initialState,
    });
    const [value, setValue] = useState(props.value);
    const setState = (nextState) => set({ ...state, ...nextState });

    const { countryCode, showCountryPicker, callingCode } = state;

    useEffect(() => {
      props.onChangeText(`${callingCode}${value}`);
    }, [value]);

    return (
      <>
        {props.label ? <Text style={style.label}>{props.label}</Text> : null}
        <View style={style.phoneInputContainer}>
          <TouchFeedback
            onPress={() =>
              setState({
                showCountryPicker: true,
              })
            }
            style={style.flagHolder}
          >
            <Flag countryCode={countryCode} flagSize={24} />
            <CountryPicker
              visible={showCountryPicker}
              // @ts-ignore
              placeholder={callingCode}
              withFilter
              withFlag
              withAlphaFilter
              withCallingCode
              onSelect={(country) => {
                const callingCode = country?.callingCode[0]
                  ? `+${country?.callingCode[0]}`
                  : '';
                setState({
                  showCountryPicker: false,
                  countryCode: country.cca2,
                  callingCode,
                });
                setValue('');
              }}
            />
            <Icon name="chevron-down" style={style.countryPickerIcon} />
          </TouchFeedback>
          <TextInput
            clearButtonMode="unless-editing"
            {...inputStyleProps}
            blurOnSubmit
            {...omit(props, [
              'label',
              'style',
              'error',
              'onBlur',
              'value',
              'onChangeText',
            ])}
            value={value}
            onChangeText={setValue}
            // onBlur={() => {
            //   props.onChangeText(
            //     `${callingCode}${trimStart(props.value, '0')}`,
            //   );
            // }}
            ref={ref}
            style={[
              style.phoneInput,
              props.style,
              props.label ? style.inputWithLabel : {},
              props.error ? style.errorInput : {},
              props.multiline ? style.multiline : {},
            ]}
          />
        </View>

        {props.error ? <Text style={style.error}>{props.error}</Text> : null}
      </>
    );
  },
);

export default PhoneInput;
