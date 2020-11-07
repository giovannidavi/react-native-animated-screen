import React, { useContext, useMemo } from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { Animated, ViewStyle, StyleProp } from 'react-native';
import AnimatedScreenContext from '../AnimatedScreenContext';

type Props = {
  animatedStyle?: (
    scrollY: Animated.Value,
  ) => Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  children: JSX.Element | JSX.Element[];
  unboxed?: boolean;
  interpolate?: { [key: string]: string[] | number[] };
  style?: ViewStyle;
};

type Interpolations = {
  [key: string]: Animated.AnimatedInterpolation;
};

const AnimatedScreenElement: React.FC<Props> = ({
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
            { width: unboxed ? widthPercentageToDP('116%') : '100%' },
            {
              marginHorizontal: unboxed
                ? -widthPercentageToDP('8%')
                : undefined,
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

export default React.memo(AnimatedScreenElement);
