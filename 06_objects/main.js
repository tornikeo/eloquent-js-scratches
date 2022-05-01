// let rabbit = {};

// rabbit.speak = function(line) {
//     console.log(`The rabbit says '${line}'`);   
// }

// rabbit.speak("I'm alive.");

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak}
let hungryRabbit = {type: "hungry", speak}

// whiteRabbit.speak("Oh my ears and whiskers, " +
//                   "how late it's getting!");
// hungryRabbit.speak("I could use a carrot right now.");

// speak.call(undefined, 'Burp!')


// let empty = {};
// console.log(empty.toString);
// console.log(empty.toString());

// console.log(Object.getPrototypeOf({}) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));
// console.log(Object.getPrototypeOf(Math.max) === 
// Object.prototype
// );

// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// }
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'killer'
// killerRabbit.speak('SKREEEE!')

// function Rabbit(type) {
//     this.type = type;
// }

// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// }


// let weirdRabbit = new Rabbit('weird')
// weirdRabbit.speak('bah');


// console.log(Object.getPrototypeOf(Rabbit) === Rabbit.prototype); // should be false

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// blackRabbit.speak('Skreee!')


Rabbit.prototype.teeth = 'small'

// console.log(killerRabbit.teeth); //small
// killerRabbit.teeth = 'long sharp and bloody'
// console.log(killerRabbit.teeth);

// console.log(blackRabbit.teeth);
// // → small
// console.log(Rabbit.prototype.teeth);

// console.log(Object.prototype.toString.call([1, 2]));

// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Tornike: 24,
// };

// console.log(ages);
// console.log('Tornike' in ages);
// console.log('Tornike' of ages);

// console.log('toString' in Object.create(null));

let ages = new Map();
ages.set("Boris", 39)

// console.log(ages.has('Boris'));
// console.log(ages.has('toString'));

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
}

// console.log(String(blackRabbit));
let sym = Symbol("name");
// console.log(sym == Symbol("name")); //false
Rabbit.prototype[sym] = 55
// console.log(blackRabbit);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

// console.log([1, 2].toString());
// // → 1,2
// console.log([1, 2][toStringSymbol]());
// // → 2 cm of blue yarn
// let stringObject = {
// [toStringSymbol]() { return "a jute rope"; }
// };
// console.log(stringObject[toStringSymbol]());

let okIterator = "OK"[Symbol.iterator]();
// console.log(okIterator.next());
// console.log(okIterator.next());
// console.log(okIterator.next());

// Iterable data structure

// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//       this.width = width;
//       this.height = height;
//       this.content = [];
  
//       for (let y = 0; y < height; y++) {
//         for (let x = 0; x < width; x++) {
//           this.content[y * width + x] = element(x, y);
//         }
//       }
//     }
  
//     get(x, y) {
//       return this.content[y * this.width + x];
//     }
//     set(x, y, value) {
//       this.content[y * this.width + x] = value;
//     }
//     [Symbol.iterator](){
//         return new MatrixIterator(this);
//     }
//     toString() {
//         let repr = ''
//         for (let y = 0; y < this.height; y++) {
//             let line = ''
//             for (let x = 0; x < this.width; x++) {
//                 line += `${this.content[y * this.width + x]},`
//             }
//             repr += `[${line}]\n`;
//         }
//         repr = `[${repr.trim()}]`;
//         return repr;
//     }
//   }
// class MatrixIterator {
//     constructor(matrix) {
//       this.x = 0;
//       this.y = 0;
//       this.matrix = matrix;
//     }
  
//     next() {
//       if (this.y == this.matrix.height) return {done: true};
  
//       let value = {x: this.x,
//                    y: this.y,
//                    value: this.matrix.get(this.x, this.y)};
//       this.x++;
//       if (this.x == this.matrix.width) {
//         this.x = 0;
//         this.y++;
//       }
//       return {value, done: false};
//     }
//   }

// let matrix = new Matrix(2,2,(x,y) => `value ${x},${y}`);
// // for (let {x, y, value} of matrix) {
// //   console.log(x, y, value);
// // }

// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }
//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }
//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }

//   static fromFahrenheit(value) {
//     return new Temperature((value - 32) / 1.8);
//   }
// }

// let temp = new Temperature(22);
// // console.log(temp.fahrenheit);
// // console.log(temp);

// class SymmetricMatrix extends Matrix {
//     constructor(size, element = (x,y) => undefined) {
//         super(size, size, (x,y) => {
//             if (x < y) return element(y,x);
//             else return element(x,y)
//         })
//     }

//     set(x,y,value) {
//         super.set(x,y,value);
//         super.set(y,x,value);
//     }
// }


// let symMatrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
// symMatrix.set(2,3,1)
// console.log(symMatrix.toString())


class Matrix {
    constructor([h,w],val = 0) {
        this.w = w
        this.h = h
        this.data = []

        if (typeof val === 'number'){
            let num = val;
            val = () => num;
        }
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                this.data[i*w + j] = val(i,j)
            }
        }
    }
    get(i,j) {
        return this.data[i*this.w + j];
    }
    set(i,j,v) {
        this.data[i*this.w + j] = v;
    }
    toString() {
        let repr = ''
        for (let y = 0; y < this.h; y++) {
            let line = ''
            for (let x = 0; x < this.w; x++) {
                line += `${this.data[y * this.w + x]},`
            }
            line = line.slice(0,-1)
            repr += `[${line}]\n`;
        }
        repr = repr.slice(0,-1)
        repr = `[${repr.trim()}]`;
        return repr;
    }
    get size() {
        return this.h * this.w;
    }
    get shape() {
        return [this.w, this.h]
    }
    [Symbol.iterator]() {
        return new MatrixIterator(this);
    }
    static zeros([a,b]) {
        return new Matrix([a,b],0)
    }
    static ones([a,b]) {
        return new Matrix([a,b],1)
    }
    map(fn) {

        for (let i = 0; i < this.h; i++) {
            for (let j = 0; j < this.w; j++) {
                this.set(i,j,fn(this.get(i,j), [i,j],))
            }
        }
        return this
    }
    elemOp(othervals, op) {
        return this.map( ( thisval, [i,j] ) => {
            return op(thisval, othervals.get(i,j));
        } )        
    }
    static MUL = (a,b) => a*b;
    static ADD = (a,b) => a+b;
    static SUB = (a,b) => a-b;
    static DIV = (a,b) => a-b;
}

class MatrixIterator {
    constructor(mat) {
        this.i = 0;
        this.mat = mat;
    }
    next() {
        let done = this.i === this.mat.size
        
        let [w,h] = this.mat.shape
        let [x,y] = [Math.floor(this.i / w),  this.i % w]
        let value = {
            value: this.mat.get(x,y),
            x,
            y,
            matrix : this.mat,
        }
        this.i++;
        // console.log(this, this.mat);
        return {value, done}
    }
}

// let mat = new Matrix([2,2], (i,j) => i + j);
// console.log(mat.toString())
// let i = 0;
// for (const v of mat) {
//     console.log(v);
//     i++;
//     if (i > 10) break;
// }

class SymmetricMatrix extends Matrix {
    constructor(n, val = 0) {
        super([n,n],val)
        for ( let {value, x, y, matrix } of this ) {
            this.set(y,x,value)
        }
    }
    set(x,y,value) {
        super.set(x, y, value);
        if (x != y) {
        super.set(y, x, value);
        }
    }
}

// let symmat = new SymmetricMatrix(2,(x,y) => (x + 1));
// symmat.set(0,1,10)
//  console.log(symmat.toString());
// console.log(symmat instanceof SymmetricMatrix);
// console.log(symmat instanceof Matrix);
// console.log(symmat instanceof Function);

// console.log(symmat.prototype === Object.getPrototypeOf(symmat)); 
// console.log([].prototype === Object.getPrototypeOf([])); 
// console.log(Function.prototype === Object.getPrototypeOf(Function)); 

// let A = Matrix.ones([3,3])
// let B = Matrix.ones([3,3]).elemOp(A, Matrix.ADD)
// console.log(B.toString());

// // GROUPS
// let m = new Map();
// m.set('a',1)
// m.set('b',2)
// console.log(m);

class Group {
    constructor(arr = []) {
        this.data = []
        for (const v of arr) {
            this.add(v);
        }
    }

    static from(arr) {
        return new Group(arr);
    }

    has(val) {
        return this.data.indexOf(val) !== -1;
    }

    add(val) {
        if (!this.has(val)) {
            this.data.push(val)
        }
    }

    delete(val) {
        let itemIndex = this.data.indexOf(val);
        if ( itemIndex !== -1 ) {
            this.data.splice(itemIndex, 1)
        }
    }
    
    *[Symbol.iterator]() {
        for (let index = 0; index < this.data.length; index++) {
            const element = this.data[index];
            yield {value: element, done: false};
        }
        return {done:true}
    }
}


// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false


// Iterable group
// let g = Group.from([1,2,3,4])
// let i = 0;
// for (const v of g) {
//     console.log(v);
//     i++;
//     if ( i > 10 ) break;
// }


//borrowing a method
// let m = {a:1,b:2};
// console.log(m);
// console.log(m.hasOwnProperty('a'))
// console.log('a' in m)

let hasOwnProperty = Symbol('hasOwnProperty')
// let map = {one: true, two: true, [hasOwnProperty]: true};
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map,"one"));
// → true