import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CounterList from './components/CounterList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CounterList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5F5F5'
  }
});
