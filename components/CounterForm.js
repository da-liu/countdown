import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import service from '../service';
import { formatDatetime } from '../utils/datetime';

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
    datetime: null,
    isDatepickerVisible: false
  };

  handleTextChange = title => this.setState({ title });

  handleDatePicked = date => {
    this.setState({
      datetime: date,
      isDatepickerVisible: false
    });
  };

  hideDatetimePicker = () => this.setState({ isDatepickerVisible: false });

  showDatetimePicker = () => this.setState({ isDatepickerVisible: true });

  handleAdd = () => {
    const { title, datetime } = this.state;
    const body = JSON.stringify({
      title,
      datetime: datetime.toISOString()
    });
    service('events', 'post', body)
      .then(() => this.props.navigation.goBack())
      .catch(err => console.log(err));
  };

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
          value={datetime ? formatDatetime(datetime) : ''}
          onFocus={this.showDatetimePicker}
          editable={!isDatepickerVisible}
        />
        <TouchableOpacity
          style={styles.addButton}
          title="Add Counter"
          accessibilityLabel="More things on accessibility"
          onPress={() => this.handleAdd()}
        >
          <Text style={styles.addButtonText}>Add Counter</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isDatepickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatetimePicker}
          supportedOrientations={['portrait', 'landscape']}
        />
      </View>
    );
  }
}

export default CounterForm;
