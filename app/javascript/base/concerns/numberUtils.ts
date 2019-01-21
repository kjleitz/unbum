/* eslint-disable import/prefer-default-export */

export const ordinalize = (num: number): string => {
  if (num > 10) return `${num}th`;
  switch (num % 10) {
    case 1: return `${num}st`;
    case 2: return `${num}nd`;
    case 3: return `${num}rd`;
    default: return `${num}th`;
  }
};
