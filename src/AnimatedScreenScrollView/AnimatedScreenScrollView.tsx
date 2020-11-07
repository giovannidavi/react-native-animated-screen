import React, { useContext } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewStyle,
  ScrollViewProps,
  View,
  ScrollView,
} from 'react-native';
import AnimatedScreenContext from '../AnimatedScreenContext';

type Props = Animated.AnimatedProps<ScrollViewProps> & {
  animatedStyle?: (scrollY: Animated.Value) => ViewStyle;
  children: JSX.Element | JSX.Element[] | null;
  style?: ViewStyle;
  scrollViewRef?: React.RefObject<ScrollView>;
};

const AnimatedScreenScrollView: React.FC<Props> = ({
  animatedStyle,
  children,
  style,
  scrollViewRef,
  ...scrollViewProps
}) => {
  const {
    scrollY,
    onScroll,
    headerMaxHeight,
    headerMinHeight,
    disableParallaxEffect,
  } = useContext(AnimatedScreenContext);
  const offSet = disableParallaxEffect
    ? headerMaxHeight + headerMinHeight
    : headerMinHeight;

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (onScroll) {
      onScroll(e);
    }
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      onScroll={handleScroll}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      bounces={false}
      style={[
        animatedStyle && animatedStyle(scrollY),
        {
          paddingTop: scrollY.interpolate({
            inputRange: [0, headerMaxHeight],
            outputRange: [headerMaxHeight, offSet],
            extrapolate: 'clamp',
          }),
        },
        style,
      ]}
      {...scrollViewProps}
    >
      {children}
      <View style={{ height: offSet }} />
    </Animated.ScrollView>
  );
};

export default React.memo(AnimatedScreenScrollView);
