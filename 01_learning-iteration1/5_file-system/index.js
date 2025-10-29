const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

// Only create the data Folder if it doesn't exist
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('Data folder created');
}

const filePath = path.join(dataFolder, 'example.txt');

// Create file using the synchronous method
fs.writeFileSync(filePath, 'Hello from Node.js!');
console.log('File created successfully');

const readContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log('File content:', readContentFromFile);

// Append one more line
fs.appendFileSync(filePath, '\nThis is a new line appended to this file.');
console.log('New file content added');

// Use the async methods
const asyncFilePath = path.join(dataFolder, 'async-example.txt');

fs.writeFile(asyncFilePath, 'Hello, Async Node.js!', (err) => {
  if (err) throw err;
  console.log('Async file created successfully');
  fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Async file content:', data);
    fs.appendFile(
      asyncFilePath,
      '\nThis is a new line appended asynchronously',
      (err) => {
        if (err) throw err;
        console.log('New line added to async file');
        fs.readFile(asyncFilePath, 'utf-8', (err, updatedData) => {
            if (err) throw err;
            console.log('Updated async file content:', updatedData);
        });
      }
    );
  });
});
