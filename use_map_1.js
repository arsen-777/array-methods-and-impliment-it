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
  let username = arr.map(function (val) {
    return val.username.length;
  });
  return username;
};

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
