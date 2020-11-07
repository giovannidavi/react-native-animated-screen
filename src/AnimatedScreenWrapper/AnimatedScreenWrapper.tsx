import React, { useState, ReactElement } from 'react';
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import AnimatedScreenContext from '../AnimatedScreenContext';
import AnimatedScreenHeader from '../AnimatedScreenHeader';

type Props = {
  headerMaxHeight?: number;
  headerMinHeight?: number;
  avoidSafeArea?: boolean;
  disableParallaxEffect?: boolean;
  onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  children: [
    ReactElement<React.ComponentProps<typeof AnimatedScreenHeader>>,
    JSX.Element,
  ];
};

const AnimatedScreenWrapper: React.FC<Props> = ({
  children,
  onScroll,
  headerMaxHeight = 200,
  headerMinHeight = 70,
  avoidSafeArea = false,
  disableParallaxEffect,
}) => {
  const [scrollY] = useState<Animated.Value>(new Animated.Value(0));
  const { top: safeTop } = initialWindowSafeAreaInsets || { top: 0 };

  return (
    <AnimatedScreenContext.Provider
      value={{
        headerMaxHeight: headerMaxHeight + (avoidSafeArea ? 0 : safeTop),
        headerMinHeight,
        onScroll,
        scrollY,
        disableParallaxEffect,
      }}
    >
      {children}
    </AnimatedScreenContext.Provider>
  );
};

export default React.memo(AnimatedScreenWrapper);
