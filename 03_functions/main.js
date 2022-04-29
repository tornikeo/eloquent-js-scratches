const square = function(x) {
    return x*x;
};

// console.log(square(3));

const mymap = (fn, arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(fn(arr[i]));
    }
}

// mymap(x => x ** 2, [1,2,3])

function chicken() {
    return egg();
}
function egg() {
return chicken();
}

// console.log(chicken() + ' came first.');

// console.log( square(1,2,3,4) );

// const mymin = (a,b) => a < b ? a : b
// console.log(mymin(-10,-11));

function isEven(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven( Math.abs( n ) - 2 );
    }
}

// console.log(isEven(11));

function countB(s) {
    // if ( s.isEmpty() ) {
    //     return 0
    // } else {
    //     return Number( s[0].lower() === 'b' ) + countB(s[1:])
    // }
    // s = s.toLowerCase();
    // let count = 0;
    // for (let i = 0; i < s.length; i++) {
    //     const ch = s[i];
    //     if ( ch === 'b' ) {
    //         count++;
    //     }
    // }
    // return count;
    return countChar(s,'b')
}

console.log(countB('Big black clock'));


function countChar(s,char) {
    s = s.toLowerCase();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if ( ch === char ) {
            count++;
        }
    }
    return count
}