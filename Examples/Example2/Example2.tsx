import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import img1 from '../assets/img/150.png';
import AnimatedScreen from '../../src';
import style from './style';

const Example2: React.FC = () => {
  const renderItem = useCallback(({ index }) => {
    return (
      <View style={style.item}>
        <Image source={img1} resizeMode="contain" style={style.image} />
        <Text style={style.text}>FlatList item {index}</Text>
      </View>
    );
  }, []);
  return (
    <AnimatedScreen.Wrapper disableParallaxEffect>
      <AnimatedScreen.Header backgroundColor="#f1f1f1" withShadow>
        <View style={style.container}>
          <Text style={style.title}>Example 2</Text>
          <AnimatedScreen.CollapsibleElement>
            <Text style={style.subtitle}>Simple header with FlatList</Text>
          </AnimatedScreen.CollapsibleElement>
        </View>
      </AnimatedScreen.Header>
      <AnimatedScreen.FlatList
        data={new Array(50).fill('')}
        renderItem={renderItem}
        contentContainerStyle={style.body}
      />
    </AnimatedScreen.Wrapper>
  );
};

export default React.memo(Example2);
