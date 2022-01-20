/**
 *
 * BackButton
 *
 */
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

type BackButtonProps = {
  onBackPress?: (...args: any[]) => any;
};

const BackButton: React.FC<BackButtonProps> = (props) => {
  const navigation = useNavigation();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackPress = (): boolean => {
    try {
      if (props.onBackPress) {
        props.onBackPress();
        return true;
      }
      navigation.goBack();
      return true;
    } catch (e) {
      return true;
    }
  };

  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <TouchFeedback style={[style.backButton]} onPress={() => handleBackPress()}>
      <Icon
        testID="backButton"
        name="arrow-left"
        style={[style.backButtonIcon]}
      />
    </TouchFeedback>
  );
};

export default BackButton;
