"use strict";

const array = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

let sumItems = function (arr) {
  let result = arr
    .filter(function (val) {
      if (val > 18) {
        return val;
      }
    })
    .reduce(function (aggr, val) {
      return aggr + val;

      0;
    });
  return result;
};
console.log(sumItems(array));
