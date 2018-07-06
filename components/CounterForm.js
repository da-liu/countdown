import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const styles = StyleSheet.create({
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
    datetime: '',
    isDatepickerVisible: false
  };

  handleTextChange = title => this.setState({ title });

  handleDatePicked = date => {
    this.setState({
      datetime: date.toString(),
      isDatepickerVisible: false
    });
  };

  hideDatetimePicker = () => this.setState({ isDatepickerVisible: false });

  showDatetimePicker = () => this.setState({ isDatepickerVisible: true });

  render() {
    const { title, datetime, isDatepickerVisible } = this.state;
    return (
      <View>
        <TextInput
          placeholder="Event name"
          style={styles.input}
          value={title}
          onChangeText={this.handleTextChange}
        />
        <TextInput
          placeholder="Date & Time"
          style={styles.input}
          value={datetime}
          onFocus={this.showDatetimePicker}
          editable={!isDatepickerVisible}
        />
        <TouchableOpacity
          style={styles.addButton}
          title="Add Counter"
          accessibilityLabel="More things on accessibility"
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.addButtonText}>Add Counter</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isDatepickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatetimePicker}
        />
      </View>
    );
  }
}

export default CounterForm;
