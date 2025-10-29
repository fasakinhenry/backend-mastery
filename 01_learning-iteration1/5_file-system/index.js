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
fs.writeFileSync(filePath, "Hello from Node.js!");
console.log('File created successfully');

const readContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log('File content:', readContentFromFile);

// Append one more line
fs.appendFileSync(filePath, "\nThis is a new line appended to this file.");
console.log('New file content added');
