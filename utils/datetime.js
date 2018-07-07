import format from 'date-fns/format';
import differenceInDays from 'date-fns/difference_in_days';
import differenceInHours from 'date-fns/difference_in_hours';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import differenceInSeconds from 'date-fns/difference_in_seconds';

export const formatDatetime = dateString => {
  return format(new Date(dateString), 'D MMM YYYY');
};

export const countBreakdown = dateString => {
  const datetimeEvent = new Date(dateString);
  const datetimeNow = new Date();
  return [
    {
      label: 'days',
      diff: differenceInDays(datetimeEvent, datetimeNow)
    },
    {
      label: 'hours',
      diff: differenceInHours(datetimeEvent, datetimeNow) % 24
    },
    {
      label: 'minutes',
      diff: differenceInMinutes(datetimeEvent, datetimeNow) % 60
    },
    {
      label: 'seconds',
      diff: differenceInSeconds(datetimeEvent, datetimeNow) % 60
    }
  ];
};
