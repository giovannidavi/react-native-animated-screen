import AnimatedScreenHeader from './AnimatedScreenHeader';
import AnimatedScreenWrapper from './AnimatedScreenWrapper';
import AnimatedScreenFlatList from './AnimatedScreenFlatList';
import AnimatedScreenSectionList from './AnimatedScreenSectionList';
import AnimatedScreenScrollView from './AnimatedScreenScrollView';
import AnimatedScreenCollapsibleElement from './AnimatedScreenCollapsibleElement';
import AnimatedScreenElement from './AnimatedScreenElement/AnimatedScreenElement';

const AnimatedScreen = {
  Header: AnimatedScreenHeader,
  Element: AnimatedScreenElement,
  Wrapper: AnimatedScreenWrapper,
  FlatList: AnimatedScreenFlatList,
  ScrollView: AnimatedScreenScrollView,
  SectionList: AnimatedScreenSectionList,
  CollapsibleElement: AnimatedScreenCollapsibleElement,
};

export default AnimatedScreen;
