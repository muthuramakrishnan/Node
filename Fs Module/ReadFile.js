//using readfile we don't have to open and close the file by ourselves
//but this function will not give that much control as read
//fs.readfile(path, (encoding, flag), callback) - async
//fs.readfileSync(path, (encoding, flag))

const fs = require("fs");
const readmeFile = "notes.txt";

// let data = fs.readFileSync(readmeFile, 'utf-8');
//or
let data = fs.readFileSync(readmeFile, { encoding: "utf-8" });
console.log(data);
