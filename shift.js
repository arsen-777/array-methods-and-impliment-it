"use strict";

let shift = function (arr) {
  let arr2 = [];
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    arr2[j] = arr[i];
    j++;
  }
  arr = arr2;
  return arr;
};

console.log(shift([1, 2, 3, 4]));
