const fs = require("fs");
const str = "This is the string i want to write\n";
const fileName = "MyFile.txt";

//fs.write(fd, string, position[, encoding], callback)
//position is where in the file you need to start writing into the file

fs.open(fileName, "a", (err, fd) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`file {${fd}} opened successfully`);
    let bytes = fs.writeSync(fd, str);
    console.log(`File written successfully, Bytes Written ${bytes}`);
  }
});
