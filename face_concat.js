"use strict";

let concat = function (arr1, arr2) {
  let resArr = [];
  let r = 0;
  for (let i = 0; i < arr1.length; i++) {
    resArr[r] = arr1[i];
    r++;
  }

  for (let j = 0; j < arr2.length; j++) {
    resArr[r] = arr2[j];
    r++;
  }
  return resArr;
};
console.log(concat([1, 2, 3], [4, 5, 6]));
