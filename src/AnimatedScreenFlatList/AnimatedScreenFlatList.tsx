import React, { useContext, useState, useMemo, useCallback } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewStyle,
  FlatListProps,
  View,
  FlatList,
} from 'react-native';
import AnimatedScreenContext from '../AnimatedScreenContext';
import styles from './styles';

type Props<T = any> = Animated.AnimatedProps<FlatListProps<T>> & {
  animatedStyle?: (scrollY: Animated.Value) => ViewStyle;
  style?: ViewStyle;
  ListFooterComponent?: () => JSX.Element | null;
  contentContainerStyle?: ViewStyle;
  flatlistRef?: React.RefObject<FlatList<T>>;
};

const AnimatedScreenFlatList: React.FC<Props> = ({
  animatedStyle,
  style,
  ListFooterComponent = () => null,
  contentContainerStyle = {},
  onScroll: onScrollFromProps,
  flatlistRef,
  ...flatListProps
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const {
    scrollY,
    onScroll,
    headerMaxHeight,
    headerMinHeight,
    disableParallaxEffect,
  } = useContext(AnimatedScreenContext);

  const shouldScroll = useMemo(
    () => contentHeight > containerHeight - headerMaxHeight,
    [contentHeight, containerHeight, headerMaxHeight],
  );
  const handleSetContent = useCallback(
    (_, height) => setContentHeight(height),
    [],
  );
  const handleSetContainer = useCallback(
    e => setContainerHeight(e.nativeEvent.layout.height),
    [],
  );
  const contentStyle = useMemo(
    () => ({
      minHeight: shouldScroll ? containerHeight + headerMaxHeight : undefined,
      ...contentContainerStyle,
    }),
    [shouldScroll, containerHeight, headerMaxHeight, contentContainerStyle],
  );
  const offSet = disableParallaxEffect
    ? headerMaxHeight + headerMinHeight
    : headerMinHeight;

  const listFooter = useMemo(() => {
    return (
      <>
        <ListFooterComponent />
        <View style={{ height: offSet }} />
      </>
    );
  }, [ListFooterComponent, offSet]);

  const flatListStyle = useMemo(() => {
    return [
      animatedStyle && animatedStyle(scrollY),
      {
        paddingTop: scrollY.interpolate({
          inputRange: [0, headerMaxHeight],
          outputRange: [headerMaxHeight, offSet],
          extrapolate: 'clamp',
        }),
      },
      style,
    ];
  }, [animatedStyle, headerMaxHeight, headerMinHeight, scrollY, style]);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (onScroll) {
      onScroll(e);
    }

    if (onScrollFromProps) {
      onScrollFromProps(e);
    }

    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };

  return (
    <Animated.FlatList
      ref={flatlistRef}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      bounces={false}
      onLayout={handleSetContainer}
      onContentSizeChange={handleSetContent}
      contentContainerStyle={contentStyle}
      scrollEnabled={shouldScroll}
      ListFooterComponent={listFooter}
      style={flatListStyle}
      {...flatListProps}
    />
  );
};

export default React.memo(AnimatedScreenFlatList);
