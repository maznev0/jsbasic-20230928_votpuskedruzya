function filterRange(arr, a, b) {
  let filtredArr = [];
  for (let item of arr) {
    if (item >= a && item <= b) filtredArr.push(item);
  }
  return filtredArr;
}
