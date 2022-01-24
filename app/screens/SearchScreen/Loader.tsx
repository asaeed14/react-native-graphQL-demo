/**
 *
 * UniversityListingLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSkeletonAnimation } from 'react-native-animated-skeleton';

import style from './style';

interface UniversityListingLoaderProps {
  numberOfItems: number;
}

const UniversityListingLoader: React.FC<UniversityListingLoaderProps> = ({
  numberOfItems,
}) => {
  const animatedStyle = useSkeletonAnimation({ speed: 1000 });

  return (
    <View style={style.listContent}>
      {Array.from(Array(numberOfItems), (_a, i) => (
        <Animated.View key={i} style={[style.loaderWrapper, animatedStyle]} />
      ))}
    </View>
  );
};

export default UniversityListingLoader;
