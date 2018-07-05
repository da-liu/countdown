import React, { Component } from 'react';
import { Text, FlatList, Button } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { events } from '../api/db.json';
import Counter from './Counter';

class CounterList extends Component {
  state = {
    events: []
  };

  static navigationOptions = {
    title: 'Countdowns'
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: [...this.state.events]
      });
    }, 1000);
    this.setState({ events });
  }

  render() {
    return [
      <FlatList
        data={this.state.events}
        renderItem={({ item, index }) => (
          <Counter key={item.key} event={item} />
        )}
      />,
      <ActionButton title="Add Counter" buttonColor="red">
        <ActionButton.Item
          onPress={() => this.props.navigation.navigate('CounterForm')}
          buttonColor="#9b59b6"
          title="New Counter"
        >
          <Icon name="md-create" style={{ height: 25, fontSize: 25 }} />,
        </ActionButton.Item>
      </ActionButton>
    ];
  }
}

export default CounterList;
