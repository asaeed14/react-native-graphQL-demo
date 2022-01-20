import React from 'react';
import {
  View,
  Platform,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedNative = Animated.createAnimatedComponent(
  TouchableNativeFeedback,
);
const RIPPLE = Platform.OS === 'android' && Platform.Version >= 21;

type TouchFeedbackProps = {
  style?: number | object | any[];
  ripple?: boolean;
  animated?: boolean;
  onPress: (...args: any[]) => any;
  testID?: string;
};

const TouchFeedback: React.SFC<TouchFeedbackProps> = ({
  children,
  ripple = false,
  animated = false,
  ...props
}) => {
  let Component: any = RIPPLE ? TouchableNativeFeedback : TouchableOpacity;
  let NativeChild: any = View;
  if (animated) {
    Component = RIPPLE ? AnimatedNative : AnimatedOpacity;
    if (RIPPLE) {
      NativeChild = Animated.View;
    }
  }
  if (RIPPLE) {
    return (
      <Component {...props}>
        <NativeChild style={props.style}>{children}</NativeChild>
      </Component>
    );
  }
  return <Component {...props}>{children}</Component>;
};
export default TouchFeedback;
