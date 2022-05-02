// function buggy() {
//   "use strict";
//   for (counter = 0; counter < 10; counter++) {
//     console.log("Happy happy");
//   }
// }

// buggy()
// "use strict";
// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand"); // oops
// console.log(name);
// → Ferdinand

// // (VillageState, Array) → {direction: string, memory: Array}
// function goalOrientedRobot(state, memory) {
//   // ...
// }

const test = (label, body) => {
  if (!body()) console.log(`Failed: ${label}`);
}

test('convert latin text to uppercase', () => {
  return "Hello".toUpperCase() == 'HELLO';
})


function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    debugger;
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);
  return sign + result;
}
// console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…


class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}


// for (;;) {
//   try {
//     let dir = promptDirection("Where?");
//     console.log("You chose ", dir);
//     break;
//   } catch (e) {
//     if (e instanceof InputError) {
//       console.log("Not a valid direction. Try again.");
//     } else {
//       throw e;
//     }
//   }
// }

// Exercise
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  let i = 0;
  while (true) {
    try {
      return primitiveMultiply(a,b);
    } catch (error) {
      if (error instanceof MultiplicatorUnitFailure) {
        console.log("mul error");
      } else {
        throw error;
      }
    }
  }
}

// console.log(reliableMultiply(8, 8));
// → 64

const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  try {
    box.unlock()
    body()
  } catch (error) {
    console.log(error);
  } finally {
    box.lock()
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true