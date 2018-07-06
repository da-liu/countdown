import format from 'date-fns/format';
import differenceInDays from 'date-fns/difference_in_days';
import differenceInHours from 'date-fns/difference_in_hours';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import differenceInSeconds from 'date-fns/difference_in_seconds';

export const formatDatetime = dateString => {
  return format(new Date(dateString), 'D MMM YYYY');
};

export const countBreakdown = dateString => {
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
