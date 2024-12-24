// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/home" && req.method === "GET") {
//     res.end("Hello world frm BACKEND");
//     }
//     if (req.url === "/about" && req.method === "GET") {
//         res.end("This is about URL");
//     }
// });

// server.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });

// Async await 
// callback function

const fs = require('fs');

fs.writeFile("./data.txt", "HELLO", "utf-8",()=>{
  console.log("File has created.");
})


fs.writeFileSync("./dataSync.txt", "Syncronous File Data", "utf-8");