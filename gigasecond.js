//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (DateNow) => {
  // accept a date (moment)
  // pass it through logic that adds the giga second to the date
  // return the date
  return new Date((DateNow.getTime() / 1000 + 1000000000) * 1000);
};
