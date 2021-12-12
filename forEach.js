"use strict";

let forEach = function (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
};

forEach([1, 2, 3], function (value) {
  console.log(value);
});
