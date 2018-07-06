import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
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
