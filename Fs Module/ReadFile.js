const fs = require("fs");

//fs.read & fs.readFileSync
// fs.read(fd, buffer, offset, length, position, callback)
// buffer to hold the contents to be read from the file
// offset where in the buffer you start putting the data
// length --> how much u want to read
// position -> from where you should start reading the data
const readmeFile = "notes.txt";

let fileSize = fs.statSync(readmeFile).size;
let buf = new Buffer(fileSize);
console.log("fileSize", fileSize);

fs.open(readmeFile, "r+", (err, fd) => {
  if (err) {
    console.log("err", err.code, err.message);
  } else {
    let bytes = fs.readSync(fd, buf, 0, fileSize, 0);
    console.log("file read size", bytes);

    console.log("buffer", buf.toString());
    

    fs.close(fd, (err) => {
      console.log("file is closed");
    });
  }
});
