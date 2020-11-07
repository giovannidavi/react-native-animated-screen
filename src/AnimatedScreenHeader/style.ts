import { StyleSheet, ViewStyle } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

type AnimatedScreen = {
  animatedWrapper: ViewStyle;
  headerBackground: ViewStyle;
};

type Props = {
  backgroundColor: string;
  boxed?: boolean;
  blur?: boolean;
  withShadow?: boolean;
};

export default ({
  boxed,
  blur,
  withShadow,
  backgroundColor,
}: Props): AnimatedScreen =>
  StyleSheet.create({
    animatedWrapper: {
      paddingHorizontal: boxed ? widthPercentageToDP('8%') : undefined,
      position: 'absolute',
      width: '100%',
      zIndex: 5,
      justifyContent: 'center',
      backgroundColor: withShadow ? backgroundColor : undefined,
      shadowColor: '#000',
      shadowRadius: 6.68,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    headerBackground: {
      position: 'absolute',
      height: '100%',
      width: boxed ? widthPercentageToDP('116%') : '100%',
      backgroundColor: blur ? 'rgba(255, 255, 255, 0.5)' : backgroundColor,
    },
  });
