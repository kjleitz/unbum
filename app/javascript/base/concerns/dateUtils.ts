import { ordinalize } from 'base/concerns/numberUtils';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const daysBetween = (from: Date, to: Date, { floor = true } = {}): number => {
  const milliseconds = Math.abs(to.getTime() - from.getTime());
  const days = milliseconds / (24 * 60 * 60 * 1000);
  return floor ? Math.floor(days) : days;
};

export const isToday = (date: Date): boolean => {
  return daysBetween(date, new Date()) === 0;
};

export const isOneWeekAgoToday = (date: Date): boolean => {
  return date.getDate() === (new Date().getDate() - 7);
};

export const humanDate = (date: Date): string => {
  const dayName = weekdays[date.getDay()];
  const dayOfTheMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const daysSince = daysBetween(date, new Date());

  if (isToday(date)) return 'Today';
  if (daysSince < 7 && !isOneWeekAgoToday(date)) return `${dayName}`;
  const fullDate = `${month} ${ordinalize(dayOfTheMonth)}, ${year}`;
  if (daysSince < 14) return `Last ${dayName} (${fullDate})`;
  return `${dayName} ${fullDate}`;
};
