
import react from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransaction from './Screens/insta';
import BookSearch from './Screens/fb';
import {createBottomTabNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){
  
  return (
    <AppContainer/>
  );
  }
}

const tabNavigator=createBottomTabNavigator({
  Transaction:{screen:BookTransaction},
  Search:{screen:BookSearch}
})

const AppContainer=createAppContainer(tabNavigator)