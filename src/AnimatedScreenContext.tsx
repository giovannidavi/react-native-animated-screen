import { createContext } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

type Props = {
  headerMaxHeight?: number;
  headerMinHeight?: number;
};

type Context = {
  headerMaxHeight: number;
  headerMinHeight: number;
  onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollY: Animated.Value;
  disableParallaxEffect?: boolean;
};

const AnimatedScreenContext = createContext<Context>({
  headerMaxHeight: hp(30),
  headerMinHeight: 100,
  scrollY: new Animated.Value(0),
});

export default AnimatedScreenContext;
