import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    height: Dimensions.get('window').height / 3,
    margin: 5,
    backgroundColor: 'white',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 17,
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  inStock: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
