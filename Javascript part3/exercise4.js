const fs = require("node:fs");
const content = "welcome to my world";

function writeFileFunction(filepath, callback) {
    fs.writeFile(filepath, content, (err) => {
        if (err) {
            console.error(err);
        }
        else {
            callback(content);
        }
    });
}

writeFileFunction(
    "D:/Sabai Code/Homework java script/Javascript part3/Javascript part3/exercise4.txt",
    (content1) => {
        console.log(content1);
    }
);
