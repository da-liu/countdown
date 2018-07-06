import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { formatDatetime } from '../utils/datetime';
import { countBreakdown } from '../utils/datetime';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    margin: 5
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  datetime: {
    color: '#a3a3a3',
    width: '30%',
    textAlign: 'right'
  },
  title: {
    marginLeft: 10
  },
  countContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  count: {
    flex: 1,
    alignItems: 'center'
  },
  countLabel: {
    fontSize: 13,
    color: '#a3a3a3'
  },
  countValue: {
    fontSize: 40
  }
});

class Counter extends Component {
  render() {
    const {
      event: { title, datetime }
    } = this.props;

    const countdowns = countBreakdown(datetime);

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.datetime}>{formatDatetime(datetime)}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.countContainer}>
          {countdowns.map(({ label, diff }) => (
            <View style={styles.count} key={label}>
              <Text style={styles.countValue}>{diff}</Text>
              <Text style={styles.countLabel}>{label.toUpperCase()}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Counter;
