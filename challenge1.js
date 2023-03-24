function compareNumbers(a, b) {
  const result = [
    `${a} is equal to ${b}`,
    `${a} is greater than ${b}`,
    `${b} is greater than ${a}`
  ];
  return result[Number(a > b) + Number(a >= b)];
}
