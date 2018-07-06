import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import service from '../api/service';
import Counter from './Counter';

class CounterList extends Component {
  state = {
    events: []
  };

  static navigationOptions = {
    title: 'Countdowns'
  };

  getEvents = () => {
    service('events', 'get')
    .then(res => res.json())
    .then(events => this.setState({ events }))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: [...this.state.events]
      });
    }, 1000);
    
    this.props.navigation.addListener('didFocus', () => {
      this.getEvents()
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => <Counter event={item} />}
          keyExtractor={item => item.id}
        />
        <ActionButton
          onPress={() => this.props.navigation.navigate('CounterForm')}
          title="Add Counter"
          buttonColor="red"
        />
      </View>
    );
  }
}

export default CounterList;
