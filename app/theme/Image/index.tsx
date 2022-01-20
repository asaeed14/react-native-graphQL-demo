/**
 *
 * Image
 *
 */
import get from 'lodash/get';
import React from 'react';

import { ImageBackground, Animated, ImageProps } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';

import Images from 'images';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

export interface IImageProps {
  title?: string;
  uri?: string;
  animated?: boolean;
  background?: boolean;
  preloadImages?: Source[] | null;
  resizeMode?: ImageProps['resizeMode'];
  style?: any;
  [key: string]: any;
}

const Img: React.FC<IImageProps> = ({
  preloadImages,
  title = 'logoThumb',
  uri = '',
  animated = false,
  background = false,
  ...props
}) => {
  let source = {};
  if (uri) {
    source = { uri };
  } else {
    source = get(Images, title);
  }
  if (preloadImages) {
    FastImage.preload(preloadImages);
  }
  let Comp = FastImage as any;
  if (background) {
    Comp = ImageBackground;
  } else if (animated) {
    Comp = AnimatedFastImage;
  }
  return (
    <Comp
      resizeMethod="resize"
      source={source}
      resizeMode="contain"
      {...props}
    />
  );
};

export default Img;
