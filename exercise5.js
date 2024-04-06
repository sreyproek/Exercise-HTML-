const fs = require('fs');

function readFileAsync(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}

function writeFileAsync(filePath, content, callback) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}

readFileAsync('input.txt', (err, inputContent) => {
    if (err) {
        console.error('Error reading input.txt:', err);
        return;
    }

    const output1Content = inputContent + '\nFirst modification';
    writeFileAsync('output1.txt', output1Content, (err) => {
        if (err) {
            console.error('Error writing to output1.txt:', err);
            return;
        }

        readFileAsync('output1.txt', (err, output1Content) => {
            if (err) {
                console.error('Error reading output1.txt:', err);
                return;
            }

            const output2Content = output1Content + '\nSecond modification';
            writeFileAsync('output2.txt', output2Content, (err) => {
                if (err) {
                    console.error('Error writing to output2.txt:', err);
                    return;
                }

                readFileAsync('output2.txt', (err, output2Content) => {
                    if (err) {
                        console.error('Error reading output2.txt:', err);
                        return;
                    }
                    console.log(output2Content);
                });
            });
        });
    });
});
