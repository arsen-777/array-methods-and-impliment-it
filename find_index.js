let forEach = function (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i);
  }
};

console.log(
  forEach([1, 2, 3, 4, 5], function (value, i) {
    if (value > 2);
    return i;
  })
);
