// for (let index = 0; index < 10; index++) {
//     let str = "";

//     for (let jndex = 0; jndex < index; jndex++) {
//         // const element = array[index];
//         str += "#"
//     }
//     console.log(str);
// }

// for (let index = 1; index < 101; index++) {
//     let str = "";
//     if (index % 3 === 0) {
//         str += "Fizz";
//     }
//     if (index % 5 === 0) {
//         str += "Buzz";
//     }
//     if (str === "") {
//         str = index;
//     }
//     console.log(str);    
// }

for (let i = 0; i < 8; i++) {
    let str = ''
    for (let j = 0; j < 8; j++) {
        str += (i % 2 !== j % 2 ? '#' : ' ');
    }
    console.log(str)
}