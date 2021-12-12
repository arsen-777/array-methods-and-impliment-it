"use strict";

const array = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

let filterNumber = function (arr) {
  let arr2 = arr.filter(function (val) {
    if (typeof val === "number") {
      return val;
    }
  });
  return arr2;
};

console.log(filterNumber(array));
