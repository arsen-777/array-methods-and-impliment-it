"use strict";

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

let getUserNames = function (arr) {
  let username = arr.map(function (val, i) {
    return val.username.length;
  });
  return username;
};

console.log(getUserNames(users));
