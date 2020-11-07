import React, { useContext, useMemo } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import AnimatedScreenContext from '../AnimatedScreenContext';

type Props = {
  animatedStyle?: (scrollY: Animated.Value) => ViewStyle;
  children: JSX.Element | JSX.Element[];
  unboxed?: boolean;
  style?: ViewStyle;
  interpolate?: { [key: string]: string[] | number[] };
};

type Interpolations = {
  [key: string]: Animated.AnimatedInterpolation;
};

const AnimatedScreenCollapsibleElement: React.FC<Props> = ({
  animatedStyle,
  children,
  unboxed,
  interpolate,
  style,
}) => {
  const { scrollY, headerMaxHeight } = useContext(AnimatedScreenContext);
  const interpolations = useMemo(() => {
    const interpolationsStyle: Interpolations = {};
    if (interpolate) {
      Object.keys(interpolate).forEach(property => {
        interpolationsStyle[property] = scrollY.interpolate({
          inputRange: [0, headerMaxHeight],
          outputRange: interpolate[property],
          extrapolate: 'clamp',
        });
      });
    }
    return interpolationsStyle;
  }, [headerMaxHeight, interpolate, scrollY]);
  return (
    <>
      {React.Children.map(children, (child: JSX.Element) => (
        <Animated.View
          style={[
            {
              width: unboxed ? widthPercentageToDP('116%') : '100%',
              opacity: scrollY.interpolate({
                inputRange: [0, headerMaxHeight],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
              maxHeight: scrollY.interpolate({
                inputRange: [0, headerMaxHeight],
                outputRange: [50, 0],
                extrapolate: 'clamp',
              }),
            },
            style && style,
            interpolate && interpolations,
            animatedStyle && animatedStyle(scrollY),
          ]}
        >
          {React.cloneElement(child)}
        </Animated.View>
      ))}
    </>
  );
};

export default React.memo(AnimatedScreenCollapsibleElement);
