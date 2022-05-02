"use strict";


let re1 = new RegExp("abc");
let re2 = /abc/

// console.log(re2);

let re3 = /eighteen\+/
// console.log(/abc/.test("abcde"));
// console.log(/abc/.test("abdcce"));

// console.log(/[0-9]/.test('in 1984'));

let dt = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
// console.log(dt.test("01-30-2003 15:20"));
// console.log(dt.test('01-jan-2008 12:33'));

let notBin = /[^01]/
// console.log(notBin.test('101010101'));
// console.log(notBin.test('191010101'));

// console.log(/\d+/.test('123'));

// console.log(/\d?/.test('123'));
// console.log(/\d?/.test('abc'));
// console.log(/\d?/.test(''));


let dt2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/

// console.log(dt2.test('1-2-3456 78:90')); //true

let re4 = /boo+(hoo+)+/i;
// console.log(re4.test('BOOOHooohooHoo'));

let match = /\d+/.exec('one two 100');
// console.log(match);

// console.log('one two 100 200'.match(/\d+/));
// console.log('she said "Hello"'.match(/"(\w+)"/i));
// console.log(/bad(ly)?/.exec('bad'));
// console.log(/(\d)+/.exec("123"));

////Date and time in JS

// console.log(new Date());
// console.log(new Date(2009,11,9)); // month is 0-based
console.log(new Date().getTime());
// console.log(new Date().getFullYear()); // no use getYear()

const getDate = (str) => {
  let [_, mon, d, yr, __] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(str)

  // let [__, hr, min] = time || [null, 0, 0];
  // console.log(time);
  return new Date(yr, mon - 1, d, )
}
// console.log(getDate("01-30-2003"));



// console.log(/\bcat/.test('concatenate'));
// console.log(/\bcon/.test('concatenate'));


// console.log("Borobodur".replace(/[ou]/, "a")); //replace once
// console.log("Borobodur".replace(/[ou]/gi, "a")); //replace all

// console.log(
//   "Liskov, Barbara \n McCartht, John \nWadler, Pilip"
//     .replace(/\b(\w+), (\w+)\b/g, "$2 $1")
// );

// console.log("the cia and fbi"
//   .replace(/\b(fbi|cia)\b/g, s => s.toUpperCase())
// );

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1
  amount = amount > 0 ? amount : 'no'
  unit = amount === 1 ? unit.slice(0,-1): unit
  return `${amount} ${unit}`
}
// console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs

// console.log(/([a]+?)/g.exec('aaaabaaba')); // prevent greed

/// STOPPED AT The LastIndex Property