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
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  spacer: {
    height: 40,
  },
  smallHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  input: {
    width: '100%',
    height: 30,
    backgroundColor: '#e0e0e0',
    opacity: 0.8,
    borderRadius: 15,
    paddingVertical: 0,
    paddingHorizontal: 15,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
