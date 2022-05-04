// NPM is two things: an online service where one can download (and upload) packages and a program (bundled with Node.js) that helps you install and manage them.

// const { default: ordinal } = require("ordinal")

// const x = 1;
// function evalAndReturnX(code) {
//   eval(code);
//   return x;
// }

// console.log((evalAndReturnX("var x = 2")));
// console.log(x);

// let plusOne = Function("n","return n + 1;");
// console.log(plusOne(4));


// const ordinal = require('ordinal');
// console.log("Hello world");

// eval('console.log(this)'); // scary stuff
// eval(`
// for (let i = 0; i < 10; i++) {
//   console.log(i); // SCARY stuff I say.
// }
// `)

// eval(`
//   eval(\`
//     eval(\\\`
//       eval(\\\\\\\`
//         console.log(\\\\\\\\\\\\\\\`THERE IS NO ESCAPE\\\\\\\\\\\\\\\`)
//         \\\\\\\`)
//     \\\`)
//   \`)
// `)

// let plusOne = Function("n", "return n + 1");
// console.log(plusOne(4));

// const ordinal = require("ordinal");
// const {days, month} = require("date-names");
// const {canWork} = require('./format-date')

// exports.formatDate = function(date, format) {
//   return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
//     if (tag == "YYYY") return date.getFullYear();
//     if (tag == "M") return date.getMonth();
//     if (tag == "MMMM") return months[date.getMonth()];
//     if (tag == "D") return date.getDate();
//     if (tag == "Do") return ordinal(date.getDate());
//     if (tag == "dddd") return days[date.getDay()];
//   })
// }

// exports.canWork = function() {
//   return true;
// }
// import {canWork as doesWork} from "./format-date"
// import ordinal from "ordinal";

// console.log(canWork());
// console.log(doesWork());

// export function formatDate(date, format) {}

// import ordinal from "ordinal";
// // import {days,months} from "date-names";

// export default ["Winter","Summer"]


// import seasons from "./seasons.js"
// console.log(seasons);


// Exercise

import djk from "dijkstrajs"
const {find_path} = djk;
console.log(find_path);

