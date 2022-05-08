const {reverse} = require("./reverse.js")
const {parse} = require('ini')
const {readFile} = require("fs")
const {writeFile} = require('fs');
const {createServer} = require('http')


// console.log(reverse(process.argv[2]));
// console.log(parse("x = 1\ny = 2"));

// readFile("package.json","utf-8", (error,text) => {
//     if (error) throw error;
//     console.log("CONTENTS:\n",text);
// })

// readFile("package.json", (error,buffer) => {
//     if (error) throw error;
//     // console.log("CONTENTS:\n",);
//     console.log("file len", buffer.length, "bytes",
//         "First byte:",buffer[0]
//     );
// })



// writeFile("graffiti.txt", "Node was here", err => {
//     if (err) throw err;
//     else console.log("File written");
// })

const server = createServer(
    (req,resp) => {
        resp.writeHead(200, {'Content-Type':"text/html"});
        resp.write(`Hello! You asked for ${req.url}`)
        resp.end();
    },
)
server.listen(8989);
console.log("Listening! at http://localhost:8989/main");

const {request} = require('http');

let requestStream = request({
  hostname: "eloquentjavascript.net",
  path: "/20_node.html",
  method: "GET",
  headers: {Accept: "text/html"}
}, resp => {
    console.log("Server responded with status code",
    resp.statusCode);
});
requestStream.end();