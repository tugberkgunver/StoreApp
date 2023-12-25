import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import StoreCard from './StoreCard';
import store_data from './store_data.json';
const App = () => {
  const [text, onChangeText] = React.useState('Ara..');
  const renderStoreData = ({item}) => <StoreCard storeData={item} />;

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.store_title}>AMAZING STORE</Text>
        <TextInput
          style={style.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <FlatList numColumns={2} data={store_data} renderItem={renderStoreData} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  store_title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#7BD3EA',
  },
  input: {
    height: 40,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
    color: '#7D7C7C',
  },
});

export default App;
