import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  form: {},
  input: {
    backgroundColor: 'white',
    height: 45,
    padding: 5,
    marginTop: 10,
    marginBottom: 10
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
    height: 45,
    color: 'red',
    margin: 5,
    borderRadius: 4
  },
  addButtonText: {
    fontSize: 16,
    color: 'white'
  }
});

class CounterForm extends Component {
  state = {
    title: '',
    datetime: ''
  };

  handleTextChange = title => this.setState({ title });

  render() {
    console.log(this.state.title);
    return (
      <View>
        <TextInput
          placeholder="Event name"
          style={styles.input}
          value={this.state.title}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity
          style={styles.addButton}
          title="Add Counter"
          accessibilityLabel="More things on accessibility"
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.addButtonText}>Add Counter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CounterForm;
