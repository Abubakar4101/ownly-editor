import React, {useRef, useState} from 'react';
import {formatDistanceToNowStrict, format} from 'date-fns';

interface Props {
  date: number | string;
}

function TimeIntervals(props: Props) {
  const {date} = props;
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const [timeInterval, setTimeInterval] = useState<string>(
    formatDistanceToNowStrict(new Date(date)),
  );

  React.useEffect(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    const secondsNumber = Number(
      formatDistanceToNowStrict(new Date(date), {unit: 'second', roundingMethod: 'floor'}).split(
        ' ',
      )[0],
    );

    intervalId.current = setInterval(
      () => {
        const time0 = formatDistanceToNowStrict(new Date(date), {
          unit: 'second',
          roundingMethod: 'floor',
        });
        const unit = Number(time0.split(' ')[0]) >= 60 ? 'minute' : 'second';
        const time = formatDistanceToNowStrict(new Date(date), {roundingMethod: 'floor'});
        setTimeInterval(time);
      },
      secondsNumber <= 60 ? 5000 : 60000,
    );
    return () => {
      intervalId.current && clearInterval(intervalId.current);
    };
  }, [date]);

  return <React.Fragment>Created {timeInterval} ago</React.Fragment>;
}

export default TimeIntervals;

export const formatDate = (
  date: string | number,
  style: 'dateOnly' | 'dateTimeWithoutSec' | 'dateTime' = 'dateTime',
): string => {
  const newDate = new Date(date);
  let dateStyle;
  switch (style) {
    case 'dateOnly':
      dateStyle = 'dd/MM/yyyy';
      break;
    case 'dateTimeWithoutSec':
      dateStyle = 'dd/MM/yyyy HH:mm';
      break;
    default:
      dateStyle = 'dd/MM/yyyy HH:mm:ss';
      break;
  }
  return format(newDate, dateStyle);
};
