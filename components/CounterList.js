import React, { Component } from 'react';
import { Text, FlatList, Button } from 'react-native';
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
      <Button
        title="Add Counter"
        onPress={() => this.props.navigation.navigate('CounterForm')}
      />
    ];
  }
}

export default CounterList;
