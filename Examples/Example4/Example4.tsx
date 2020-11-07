import React, { useCallback } from 'react';
import { Animated, Image, Text, TextInput, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import img1 from '../assets/img/150.png';
import AnimatedScreen from '../../src';
import style from './style';

const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

const Example4: React.FC = () => {
  const renderItem = useCallback(({ item }) => {
    return (
      <View style={style.item}>
        <Image source={img1} resizeMode="contain" style={style.image} />
        <Text style={style.text}>{item}</Text>
      </View>
    );
  }, []);
  const renderSectionHeader = useCallback(({ section }) => {
    return (
      <View style={style.section}>
        <Text>{section.title}</Text>
      </View>
    );
  }, []);
  const getBackgroundOpacity = useCallback(
    (scrollY: Animated.Value) => ({
      backgroundColor: scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: ['#236979', '#6c2379'],
        extrapolate: 'clamp',
      }),
    }),
    [],
  );
  const renderBackground = useCallback(
    (scrollY: Animated.Value) => (
      <Animated.View
        style={[style.background, getBackgroundOpacity(scrollY)]}
      />
    ),
    [getBackgroundOpacity],
  );
  const headerAnimatedStyle = useCallback(
    scrollY => ({
      transform: [
        {
          scale: scrollY.interpolate({
            inputRange: [0, 200],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        },
      ],
    }),
    [],
  );
  return (
    <AnimatedScreen.Wrapper
      disableParallaxEffect
      headerMaxHeight={200}
      headerMinHeight={100}
    >
      <AnimatedScreen.Header
        renderBackground={renderBackground}
        withShadow
        style={style.header}
      >
        <View style={style.container}>
          <View style={style.smallHeader}>
            <AnimatedScreen.Element
              interpolate={{ width: [widthPercentageToDP(100) - 20, 30] }}
              style={style.logoWrapper}
            >
              <Image source={img1} style={style.logo} />
            </AnimatedScreen.Element>
            <AnimatedScreen.Element
              interpolate={{ opacity: [0, 1] }}
              animatedStyle={headerAnimatedStyle}
            >
              <Text style={style.title}>Example 4</Text>
            </AnimatedScreen.Element>
          </View>
          <AnimatedScreen.CollapsibleElement interpolate={{ height: [40, 0] }}>
            <Text style={style.title}>Example 4</Text>
            <Text style={style.subtitle}>OnScroll Animated Header</Text>
          </AnimatedScreen.CollapsibleElement>
          <AnimatedScreen.Element interpolate={{ height: [20, 5] }}>
            <View />
          </AnimatedScreen.Element>
          <AnimatedScreen.Element>
            <TextInput style={style.input} placeholder="Search..." />
          </AnimatedScreen.Element>
        </View>
      </AnimatedScreen.Header>
      <AnimatedScreen.SectionList
        sections={sections.map(section => ({
          title: section,
          data: new Array(Math.floor(Math.random() * 5) + 1).fill(
            `Element in ${section} section`,
          ),
        }))}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </AnimatedScreen.Wrapper>
  );
};

export default React.memo(Example4);
