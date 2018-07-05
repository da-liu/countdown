import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { events } from '../api/db.json';
import Counter from './Counter';

class CounterList extends Component {
  state = {
    events: []
  };

  static navigationOptions = {
    title: 'Counter List'
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
    return (
      <FlatList
        data={this.state.events}
        renderItem={({ item, index }) => <Counter event={item} />}
      />
    );
  }
}

export default CounterList;
