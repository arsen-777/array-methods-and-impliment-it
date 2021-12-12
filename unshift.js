"use strict";

let unshift = function (arr, el) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = el;
  return arr;
};
console.log(unshift([1, 2, 3], 4));
