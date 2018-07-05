import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CounterList from './components/CounterList';
import CounterForm from './components/CounterForm';

const Root = createStackNavigator(
  {
    CounterList: CounterList,
    CounterForm: CounterForm
  },
  {
    initialRouteName: 'CounterList'
  }
);

export default class App extends React.Component {
  render() {
    return <Root />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  }
});
