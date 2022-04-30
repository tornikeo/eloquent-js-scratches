function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  }

//   console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
let arr = [1,2,3,4,5];
// console.log(arr.map((v,i) => (v + i)))
// console.log(arr.filter((v,i) => v < i * 2))
// console.log(arr.reduce((pv,cv,i,x) => {
//     console.log(x);
//     return pv + cv;
// }));
// console.log( Math.round( arr.reduce((a,b)=>a+b) / arr.length ));
// console.log(arr.findIndex(v => v === 2) );
let arrays = [[1, 2, 3], [4, 5], [[6],7]];

const isNested = arr => arr.some(v => typeof v == 'object')


const flatten = (arr) => {
    if (typeof arr != 'object') {
        return arr;
    }
    if (! isNested(arr) ) {
        return arr;
    } else {
        return arr.reduce((p,v) => p.concat(flatten(v)), [])
    }
}

// console.log((flatten(arrays)));

const loop = (val, test, update, body) => {
    for (; test(val); val = update(val)) {body(val)}
}

// loop(3, n => n > 0, n => n - 1, console.log);


const every = (arr, pred) => {
    return arr.reduce((p,v) => p && pred(v), true)
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true