function matrix(...number) {
  let result = 1;
  for (let num of number) {
    result = result * num;
  }
  return result;
}
console.log(matrix(1, 2, 3, 4));
