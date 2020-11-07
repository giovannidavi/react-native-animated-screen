import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
  },
  section: {
    backgroundColor: '#e0e0e0',
    padding: 10,
  },
  item: {
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
});
