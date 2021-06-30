// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, functionToRunWhenThingsFinish) {
  console.log('breedDetailsFromFile: Calling readFile...');

  // call async readfile fn and pass in the callback package to run after the main message/thread is completed
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    if (!error) {
      // using a passed in callback function to work with the data upon completed at some future time
      return functionToRunWhenThingsFinish(data);
    }
    return functionToRunWhenThingsFinish(undefined);
  });
};

printOutData = (data) => {
  console.log('Return Value: ', data);
};

// we try to get the return value
breedDetailsFromFile('Bombay', printOutData);

module.exports = breedDetailsFromFile;
