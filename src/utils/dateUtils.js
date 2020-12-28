import moment from 'moment';

export const getStartOfToday = () => moment().startOf('day');
export const getStartOfTomorrow = () => getStartOfToday().add(1, 'days');

export const getStartOfDay = (date) => moment(date).startOf('day');
export const getEndOfDay = (date) => moment(date).endOf('day');

export const isStartOrEndOfDay = (date) =>
  getStartOfDay(date).valueOf() === moment(date).valueOf() ||
  getEndOfDay(date).valueOf() === moment(date).valueOf();

export const getDateTimeFormat = (date, dateFormat, dateTimeFormat) =>
  isStartOrEndOfDay(date) ? dateFormat : dateTimeFormat;

export const isValidDate = (date) => date && moment(date).isValid();

export const isToday = (date) => date && moment(date).isSame(moment(), 'day');
export const isYesterday = (date) =>
  date && moment(date).isSame(moment().add(-1, 'days'), 'day');

export const isSameDay = (date1, date2) => moment(date1).isSame(date2, 'day');

export const isWithinNextSixDays = (date) => {
  const today = getStartOfToday();
  const sixDaysLater = getStartOfToday().add(7, 'days');
  return moment(date).isBetween(today, sixDaysLater, 'day');
};

export const getFormattedDate = (date) => {
  let format = null;
  if (!isValidDate(date)) {
    return;
  }

  const shortDateFormat = 'MM/YYYY';
  const timeFormat = 'HH:mm';
  const longDateFormat = 'DD/MM/YYYY';

  // Yesterday
  if (isYesterday(date)) {
    format = getDateTimeFormat(
      date,
      '[Yesterday]',
      `[Yesterday] ${timeFormat}`,
    );
    return moment(date).format(format);
  }
  // Today
  if (isToday(date)) {
    format = getDateTimeFormat(date, '[Today]', `[Today] ${timeFormat}`);
    return moment(date).format(format);
  }
  // Tomorrow
  if (isSameDay(getStartOfTomorrow(), date)) {
    format = getDateTimeFormat(date, '[Tomorrow]', `[Tomorrow] ${timeFormat}`);
    return moment(date).format(format);
  }
  // Within next 6 days
  if (isWithinNextSixDays(date)) {
    format = getDateTimeFormat(date, 'dddd', `dddd ${timeFormat}`);
    return moment(date).format(format);
  }
  // Date is not in this year
  if (!moment(date).isSame(getStartOfToday(), 'year')) {
    format = getDateTimeFormat(
      date,
      longDateFormat,
      `${longDateFormat} ${timeFormat}`,
    );
    return moment(date).format(format);
  }
  // Default format
  format = getDateTimeFormat(
    date,
    shortDateFormat,
    `${shortDateFormat} ${timeFormat}`,
  );
  return moment(date).format(format);
};
