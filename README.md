# React Native Animated Screen 

[![Version](https://img.shields.io/npm/v/react-native-animated-screen)](https://www.npmjs.com/package/react-native-animated-screen) [![Build Status](https://img.shields.io/npm/l/react-native-animated-screen)](https://www.npmjs.com/package/react-native-animated-screen)

  

This module includes all the necessary components to generate outstanding **scroll-based** **animated screens** and **screens header**.

  

The package is both **Android** and **iOS** compatible.

  

## Try it out

You can play with our ready-to-use **examples** from our GitHub repository

```

$ git clone https://github.com/giovannidavi/react-native-animated-screen.git

```

  
You can check the examples code here [examples](https://github.com/giovannidavi/react-native-animated-screen/tree/master/Examples)
  

## Installation

```

$ npm install --save react-admin-animated-screen

```

  

The solution is implemented in JavaScript so no native module linking is required.

  

## Usage

 By default the component exposes 7 sub-components to help you creating the stage. 

 - AnimatedScreen.Wrapper
 - AnimatedScreen.Header
 - AnimatedScreen.ScrollView
 - AnimatedScreen.FlatList
 - AnimatedScreen.SectionList
 - AnimatedScreen.Element
 - AniamtedScreen.CollapsibleElement

For the animation to work properly you need to wrap your entire view in an AnimatedScreen.Wrapper component which will include the AnimatedScreen.Header and at least one of the scrollable elements:

 - AnimatedScreen.ScrollView
 - AnimatedScreen.FlatList
 - AnimatedScreen.SectionList


  

```javascript

import  React  from  'react';
import { Image, Text, View } from  'react-native';
import AnimatedScreen from  'react-native-animated-screen';

const  Component = () => {
   return (
     <AnimatedScreen.Wrapper>
       <AnimatedScreen.Header>
         <View>
           <Text>Title</Text>
           <AnimatedScreen.CollapsibleElement>
             <Text>Subtitle</Text>
           </AnimatedScreen.CollapsibleElement>
         </View>
       </AnimatedScreen.Header>
       <AnimatedScreen.ScrollView>
         <View  style={{ height: '300%' }}>
           <View>
             <Text>Body</Text>
           </View>
         </View>
       </AnimatedScreen.ScrollView>
     </AnimatedScreen.Wrapper>
   );
};
```

  

### AnimatedScreen.Wrapper

  Is  the main component and the wrapper of the entire animated screen, **required**

  

#### Basic parameters

  
```javascript

<AnimatedScreen.Wrapper
  // Set header max and min height (before and after scroll)
  
  // headerMaxHeight?: number; (default: 200)
  hederMaxHeight={200}
  // headerMinHeight?: number; (default: 70
  headerMinHeight={70}

  // Select if the screen should take care of avoiding safe area
  // avoidSafeArea?: boolean; (default: false)
  avoidSafeArea={true}

  // Select if want your body and header to scroll with a parallax effect or not
  // disableParallaxEffect?: boolean; (default: false)
  disableParallaxEffect={false}

  // Select if want your body and header to scroll with a parallax effect or not
  // onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) =>  void;
  onScroll={() => null}

>
  // at least an AnimatedScreen.Header and an AnimatedScreen scrollable element required as children
  { children }
</AnimatedScreen.Wrapper>

```
