const fs = require('fs');

function writeFileAsync(filePath, content, callback) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}
const filePath = 'example.txt';
const fileContent = 'Hello, world!';

writeFileAsync(filePath, fileContent, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');
    }
});
