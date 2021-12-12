"use strict";

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

let getAverageAge = function (arr) {
  let average = arr.map(function (val) {
    if (typeof val.age === "number") {
      return val.age;
    }
  });
  return average.reduce(function (aggr, val) {
    return (aggr + val) / average.length;
    0;
  });
};

console.log(getAverageAge(users));
