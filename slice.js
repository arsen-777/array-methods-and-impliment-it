"use strict";

let splice = function (arr, start, end = arr.length) {
  let str = [];
  let startLoop = start > 0 ? start : arr.length + start;
  let endLoop = end > 0 ? end : arr.length + end;
  for (let i = startLoop; i < endLoop; i++) {
    str.push(arr[i]);
  }
  return str;
};

console.log(splice([1, 2, 3, 4, 5], -3, -2));
