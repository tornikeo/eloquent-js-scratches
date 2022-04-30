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

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}


let weirdRabbit = new Rabbit('weird')
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
