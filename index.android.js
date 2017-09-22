// android code

// import a library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a Component
const App = () => (
  <View>
    <Header headerText={'Albums Yey!'} />
    <AlbumList />
  </View>
);

// render it to device
AppRegistry.registerComponent('albums', () => App);
