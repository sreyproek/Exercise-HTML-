const fs = require('fs').promises;

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return data;
  } catch (error) {
    throw error;
  }
}

async function writeFileAsync(filePath, data) {
  try {
    await fs.writeFile(filePath, data);
  } catch (error) {
    throw error;
  }
}

async function executeScenario() {
  try {
   
    const inputData = await readFileAsync("D:/Sabai Code/Homework java script/Java script part6/output.txt");

    const modifiedData1 = inputData + "First modification\n";
    await writeFileAsync('output3.txt', modifiedData1);

    const output1Data = await readFileAsync('output3.txt');
    const modifiedData2 = output1Data + "Second modification\n";
    await writeFileAsync('output4.txt', modifiedData2);

    const output2Data = await readFileAsync('output4.txt');
    console.log(output2Data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
executeScenario();