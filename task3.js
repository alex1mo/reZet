const LIMIT = 16;

let arr = [
  ["Hello", "world"],
  ["Brad", "cam", "to", "diner", "with", "us"],
  ["He", "loves", "tacos"],
];
let alig = ["LEFT", "RIGHT", "LEFT"];
let result = [];

arr.forEach((e, i) => {
  let p = alig[i];
  let str = e.join(" ");
  if (str.length > LIMIT) {
    e.reduce((c, e, i, arr) => {
      if ((c + " " + e).length < LIMIT && i != arr.length - 1) {
        return c + " " + e;
      } else {
        result.push(pos(c, p));
        return (c = e);
      }
    });
  } else {
    result.push(pos(str, p));
  }
});

function pos(str, pos) {
  switch (pos) {
    case "LEFT":
      return `*${str + " ".repeat(LIMIT - str.length)}*`;
    case "RIGHT":
      return `*${" ".repeat(LIMIT - str.length) + str}*`;
  }
}

result.unshift("*".repeat(LIMIT + 2));
result.push("*".repeat(LIMIT + 2));

console.log(result);
