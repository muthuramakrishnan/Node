const fs = require("fs");

const readmeFile = "readme.md";
//fs.open(filepath, flag, [mode], callback)
fs.open(readmeFile, "r+", (err, fd) => {
  if (err) {
    console.log("There has been an error", err.code, err.message);
  } else {
    //can read and write
    console.log("file opened successfully");
  }
});

//fs stat
//for stats there's no need of opening a file
let stats = fs.statSync(readmeFile);
console.log(stats);
console.log(stats.isDirectory());

fs.stat(readmeFile, (err, statsAsync) => {
    if(err){
        throw err;
    }
    else{
        console.log("statsAsync",statsAsync);
    }
})
