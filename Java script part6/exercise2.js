//convert readFile to promise
const fs = require("fs");

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
//convert writeFile to promise
function writeFileFunction (filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(err);
            }
            else{
                resolve();
            }
        });
    });
}
//than use it to complete the process like exercise5(JS-p3)
readFile("D:\\Sabai Code\\Homework java script\\Java script part6\\output.txt")
  .then(data => {
    console.log(data)
    const modifiedData = data +"\n modification";
    return writeFileFunction ("D:\\Sabai Code\\Homework java script\\Java script part6\\output1.txt", modifiedData);
  })
  .then (() => {
    return readFile("D:\\Sabai Code\\Homework java script\\Java script part6\\output1.txt");
  })
  .then (data => {
    const modifiedData = data + "\nSecond modification";
    return writeFileFunction("D:\\Sabai Code\\Homework java script\\Java script part6\\output2.txt", modifiedData);
  })
  .then(() => {
    return readFile("D:\\Sabai Code\\Homework java script\\Java script part6\\output2.txt");
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("An occurred:", error);
  });


