"use strcit";
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

let filterUsers = function (arr) {
  let arrNew = arr.filter(function (val) {
    if (val.lang !== "ru") {
      return val;
    }
  });
  return arrNew;
};

console.log(filterUsers(users));
