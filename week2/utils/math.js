// MATH - check if value is Number
const isNumeric = (value) => {
  return /^-?\d+$/.test(value);
};

export { isNumeric };
