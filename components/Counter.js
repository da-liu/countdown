import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import format from 'date-fns/format';
import differenceInDays from 'date-fns/difference_in_days';
import differenceInHours from 'date-fns/difference_in_hours';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import differenceInSeconds from 'date-fns/difference_in_seconds';

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'steelblue'
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    margin: 5
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row'
  },
  datetime: {
    width: '30%',
    textAlign: 'right'
  },
  title: {
    marginLeft: 10
  },
  count: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

const formatDatetime = dateString => {
  return format(new Date(dateString), 'D MMM YYYY');
};

const countBreakdown = dateString => {
  return [
    { label: 'days', diff: differenceInDays(new Date(dateString), new Date()) },
    {
      label: 'hours',
      diff: differenceInHours(new Date(dateString), new Date()) % 24
    },
    {
      label: 'minutes',
      diff: differenceInMinutes(new Date(dateString), new Date()) % 60
    },
    {
      label: 'seconds',
      diff: differenceInSeconds(new Date(dateString), new Date()) % 60
    }
  ];
};

class Counter extends Component {
  render() {
    const {
      event: { title, datetime }
    } = this.props;

    const countdowns = countBreakdown(datetime);

    return (
      <View style={[styles.container, styles.card]}>
        <View style={styles.cardHeader}>
          <Text style={styles.datetime}>{formatDatetime(datetime)}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.count}>
          {countdowns.map(({ label, diff }) => (
            <View>
              <Text>{diff}</Text>
              <Text>{label.toUpperCase()}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Counter;
