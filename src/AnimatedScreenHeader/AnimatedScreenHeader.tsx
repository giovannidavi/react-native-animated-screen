import React, { useContext } from 'react';
import { View, Animated, ViewStyle, SafeAreaView } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import AnimatedScreenContext from '../AnimatedScreenContext';
import useStyle from './style';

type Props = {
  boxed?: boolean;
  children?: JSX.Element | JSX.Element[];
  animatedStyle?: (scrollY: Animated.Value) => ViewStyle;
  renderBackground?: (scrollY: Animated.Value) => JSX.Element;
  withShadow?: boolean;
  blur?: boolean;
  backgroundColor?: string;
  withSafeArea?: boolean;
  style?: ViewStyle;
};

const AnimatedScreenHeader: React.FC<Props> = ({
  children,
  boxed,
  animatedStyle,
  blur,
  withShadow,
  backgroundColor = 'white',
  renderBackground,
  withSafeArea = true,
  style,
}) => {
  const { scrollY, headerMaxHeight, headerMinHeight } = useContext(
    AnimatedScreenContext,
  );
  const styles = useStyle({
    boxed,
    blur,
    withShadow,
    backgroundColor,
  });

  const shadowOpacity = scrollY.interpolate({
    inputRange: [0, headerMaxHeight],
    outputRange: [0, 0.3],
    extrapolate: 'clamp',
  });

  const elevation = scrollY.interpolate({
    inputRange: [0, headerMaxHeight],
    outputRange: [0, 14],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.animatedWrapper,
        {
          height: scrollY.interpolate({
            inputRange: [0, headerMaxHeight],
            outputRange: [headerMaxHeight, headerMinHeight],
            extrapolate: 'clamp',
          }),
        },
        withShadow && { elevation, shadowOpacity },
        style && style,
        animatedStyle && animatedStyle(scrollY),
      ]}
    >
      {blur ? (
        <BlurView
          blurAmount={36}
          blurType="light"
          style={styles.headerBackground}
        />
      ) : (
          <View style={styles.headerBackground} />
        )}
      {renderBackground && renderBackground(scrollY)}
      {withSafeArea ? <SafeAreaView>{children}</SafeAreaView> : <>{children}</>}
    </Animated.View>
  );
};

export default React.memo(AnimatedScreenHeader);
