const fs = require("fs");

function readFile(filePath, callbak) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      callbak(data);
    }
  });
}
readFile(
  "D:/Sabai Code/Homework java script/Javascript part3/Javascript part3/exercise3.txt",
   data
);