/**
 *
 * Screen
 *
 */
import React, { useRef } from 'react';
import { View, KeyboardAvoidingView, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from './Header';
import Footer from './Footer';
import style from './style';

interface ScreenProps {
  useScrollView?: boolean;
  blockBackPress?: boolean;
  contentContainerStyle?: number | object;
  headerTitle?: string | React.ReactNode;
  onBackPress?: any;
  testID: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  headerVisibilityThreshold?: number;
  [x: string]: any;
}

const Screen: React.FC<ScreenProps> = ({
  headerVisibilityThreshold = 0,
  useScrollView = true,
  ...props
}) => {
  const contentContainer: any = useRef();

  const visibleValue = useRef(
    new Animated.Value(headerVisibilityThreshold > 0 ? 0 : 1),
  ).current;

  const onScroll = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }) => {
    if (!headerVisibilityThreshold) {
      return;
    }
    Animated.timing(visibleValue, {
      toValue: y > headerVisibilityThreshold ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const ContentWrapper: any = useScrollView ? ScrollView : View;
  const contentWrapperProps = useScrollView
    ? {
        testID: props.testID,
        onScroll,
        scrollEventThrottle: 32,
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: [
          style.scrollContentContainer,
          props.contentContainerStyle,
        ],
        bounces: false,
      }
    : {};

  return (
    <>
      <Header
        title={props.headerTitle}
        visibleValue={visibleValue}
        onBackPress={props.onBackPress}
        blockBackPress={props.blockBackPress}
      />
      <KeyboardAvoidingView behavior="height" style={style.contentWrapper}>
        <ContentWrapper
          testID={props.testID}
          style={[!useScrollView ? style.contentHolder : null]}
          key="scroll"
          ref={contentContainer}
          {...contentWrapperProps}
        >
          {props.children}
        </ContentWrapper>
      </KeyboardAvoidingView>
      {props.footer ? <Footer key="footer">{props.footer}</Footer> : null}
    </>
  );
};

export default React.memo(Screen);
