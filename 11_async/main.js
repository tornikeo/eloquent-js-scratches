"use strict";

// setTimeout(() => console.log('Tick'), 500);

// let fifteen = Promise.resolve(15);
// fifteen.then(val => console.log(`Got: ${val}`));

// function storage(nest, name) {
//     return new Promise(resolve => {
//         nest.readStorage(name, 
//             result => resolve(result))
//     })
// }

// let ds = Object.create(null)
// ds['enemies'] = ['squirrels','frogs']
// ds.readStorage = (name, done) => {
//     let result = ds[name];
//     console.log('Reading', name, 'is', result);
//     console.log("Calling done() with result");
//     done(result)
// }

// storage(ds, 'enemies')
//     .then(val => console.log("Got", val))

// new Promise((_, reject) => reject(new Error("Fail")))
//     .then(val => console.log("Handler 1"))
//     .catch(reason => {
//         console.log("Caught failure", reason);
//         return new Error()
//     })
//     .then(value => console.log("Handler 2", value))

// console.log('ABCD');
// undefined.something;
// setTimeout(() => console.log("Delayed stuff"), 200)

class Timeout extends Error {}

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false;
        function attempt(n) {
            nest.send(target, type, content, (failed,value) => {
                done = true;
                if (failed) reject(failed);
                else resolve(value)
            })
            setTimeout(() => {
                if (done) return;
                else if (n < 3) attempt(n + 1)
                else reject(new Timeout("Timed out"))
            }, 250);
        }
        attempt(1)
    })
}


function requestType(name, handler) {
    defineRequestType(name, (nest, content, source, callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
                .then(response => callback)
        } catch (error) {
            
        }
    })
}

requestType