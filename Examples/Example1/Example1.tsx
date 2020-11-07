import React from 'react';
import { Image, Text, View } from 'react-native';
import img1 from '../assets/img/150.png';
import AnimatedScreen from '../../src';
import style from './style';

const Example1: React.FC = () => {
  return (
    <AnimatedScreen.Wrapper disableParallaxEffect>
      <AnimatedScreen.Header backgroundColor="#f1f1f1" withShadow>
        <View style={style.container}>
          <Text style={style.title}>Example 1</Text>
          <AnimatedScreen.CollapsibleElement>
            <Text style={style.subtitle}>Simple header with ScrollView</Text>
          </AnimatedScreen.CollapsibleElement>
        </View>
      </AnimatedScreen.Header>
      <AnimatedScreen.ScrollView>
        <View style={style.body}>
          <View style={style.container}>
            <Text>
              Fusce fermentum. Pellentesque egestas, neque sit amet convallis
              pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.
              In turpis. Cras ultricies mi eu turpis hendrerit fringilla.
              Maecenas nec odio et ante tincidunt tempus. Aliquam lobortis.
              Etiam vitae tortor. Suspendisse pulvinar, augue ac venenatis
              condimentum, sem libero volutpat nibh, nec pellentesque velit pede
              quis nunc. Etiam vitae tortor. Cras ultricies mi eu turpis
              hendrerit fringilla. Morbi mattis ullamcorper velit. Proin
              viverra, ligula sit amet ultrices semper, ligula arcu tristique
              sapien, a accumsan nisi mauris ac eros. Vivamus elementum semper
              nisi. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec, purus. Etiam vitae tortor.
            </Text>
            <View style={style.imgWrapper}>
              <Image source={img1} />
            </View>
            <Text>
              Fusce fermentum. Pellentesque egestas, neque sit amet convallis
              pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.
              In turpis. Cras ultricies mi eu turpis hendrerit fringilla.
              Maecenas nec odio et ante tincidunt tempus. Aliquam lobortis.
              Etiam vitae tortor. Suspendisse pulvinar, augue ac venenatis
              condimentum, sem libero volutpat nibh, nec pellentesque velit pede
              quis nunc. Etiam vitae tortor. Cras ultricies mi eu turpis
              hendrerit fringilla. Morbi mattis ullamcorper velit. Proin
              viverra, ligula sit amet ultrices semper, ligula arcu tristique
              sapien, a accumsan nisi mauris ac eros. Vivamus elementum semper
              nisi. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec, purus. Etiam vitae tortor.
            </Text>
          </View>
        </View>
      </AnimatedScreen.ScrollView>
    </AnimatedScreen.Wrapper>
  );
};

export default React.memo(Example1);
