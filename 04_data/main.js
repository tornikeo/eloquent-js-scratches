// let listOfNumbers = [2,3,5,7,10];

// let propname = 'length'
// listOfNumbers[propname]

// console.log(listOfNumbers);
// console.log(listOfNumbers['0']);
// console.log(listOfNumbers['len gth']);

// let day1 = {
//     squirrel: false, 
//     events: ["work", "touched tree", "pizza", "running"]
// }

// console.log(day1.events[0]);
// delete day1.events[0]
// console.log(day1.events);
// console.log('events' in day1);

// let anObj = {
//     left: 1,
//     right: 2,
// }

// console.log(anObj);
// delete anObj.left
// console.log(anObj)
// anObj.right = undefined
// console.log(anObj)

// const a = 'cat'
// a[0] = 'r' //fails silently
// console.log(a);

let arr = [1,2,3]
// for (const en of arr) {
//     console.log(en);
// }

// console.log(arr.unshift(0));
// console.log(arr);
// console.log(arr.shift(0));
// console.log(arr);
// console.log(arr.indexOf(0));
// console.log(arr.slice(1));

// let s = 'secretberry specs in gpu maintenance'
// console.log(s.split('e').join('E').repeat(3));

// function map3(fn, [a,b,c]) {
//     return [fn(a),fn(b),fn(c)]
// }
// console.log(map3(x=>x+1,[1,2,3]))


// let s = JSON.stringify({
//     "squirrel":false,
//     "events":['work','play']
// })
// let o = JSON.parse(s)
// console.log(s,o);

const range = (a,b,step) => {
    let arr = []
    for (let i = a; i != b; i+=step) {
        arr.push(i);
    }
    return arr;
}

const sum = (arr) => {
    let acc = 0;
    for (const val of arr) {
        acc += val;
    }
    return acc;
}

const reverse = (arr,inplace=false) => {
    if (inplace) {
        for (let i = 0; i < arr.length / 2; i++) {
            const element = arr[i];
            [arr[i],arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
        }
    } else {
        let ret = [];
        for (const val of arr) {
            ret.unshift(val);
        }
        return ret;
    }
}

// console.log(sum(range(10,1,-1)));
// console.log(reverse(arr));
// reverse(arr,true)
// console.log(arr);

const List = (value,rest) => { return {value,rest}};

const arr2list = (arr) => {
    arr = reverse(arr)
    let lastItem = null;
    let entry = null;
    for (const v of arr) {
        entry = List(value=v, rest=lastItem);
        lastItem = entry;
    }
    return entry
}

const list2arr = (ls) => {
    let arr = []
    for ( let entry = ls; entry != null; entry = entry.rest) {
        arr.push(entry.value)
    }
    return arr;
}
// console.log(List(1,2));
// let ls = arr2list([1,2,3,4])
// console.log(ls);
// console.log(list2arr(ls));

const deepEqual = (a,b) => {
    if (a === null) {
        return b === null;
    } else if (typeof a === 'object') {
        if ( Object.keys(a).length !== Object.keys(b).length ) {
            return false;
        }
        for (const key of Object.keys(a)) {
            if ( ! deepEqual(a[key], b[key]) ) {
                return false;
            }
        }
        return true
    } else {
        return a === b;
    }
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
