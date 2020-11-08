import React, { useContext, useState, useMemo, useCallback } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  SectionListProps,
  ViewStyle,
  View,
  SectionList,
} from 'react-native';
import AnimatedScreenContext from '../AnimatedScreenContext';

type Props<T = any> = Animated.AnimatedProps<SectionListProps<T>> & {
  animatedStyle?: (scrollY: Animated.Value) => ViewStyle;
  style?: ViewStyle;
  ListFooterComponent?: () => JSX.Element | null;
  sectionlistRef?: React.RefObject<SectionList<T>>;
};

const AnimatedScreenSectionList: React.FC<Props> = ({
  animatedStyle,
  style,
  ListFooterComponent = () => null,
  sectionlistRef,
  ...sectionListProps
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const { scrollY, onScroll, headerMaxHeight, headerMinHeight } = useContext(
    AnimatedScreenContext,
  );
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
    }),
    [shouldScroll, containerHeight, headerMaxHeight],
  );

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (onScroll) {
      onScroll(e);
    }
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };

  return (
    <>
      <Animated.SectionList
        ref={sectionlistRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        stickySectionHeadersEnabled
        bounces={false}
        onLayout={handleSetContainer}
        onContentSizeChange={handleSetContent}
        contentContainerStyle={contentStyle}
        scrollEnabled={shouldScroll}
        ListFooterComponent={
          <>
            <ListFooterComponent />
            <View style={{ height: headerMinHeight }} />
          </>
        }
        style={[
          animatedStyle && animatedStyle(scrollY),
          {
            paddingTop: scrollY.interpolate({
              inputRange: [0, headerMaxHeight],
              outputRange: [headerMaxHeight, headerMinHeight],
              extrapolate: 'clamp',
            }),
          },
          style,
        ]}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...sectionListProps}
      />
    </>
  );
};

export default React.memo(AnimatedScreenSectionList);
