import path from 'node:path'; // Modern ESM import
// Code to manipulate a path

const filePath = '/users/dev/documents/project/app.js';
const directory = 'configs';
const fileName = 'server.env';

// 1. Join paths reliably
const fullPath = path.join(directory, fileName);
console.log(`\n--- PATH Module Output ---`);
console.log('Joined Path:', fullPath); // Output: configs/server.env

// 2. Extract file information
console.log('Base Name:', path.basename(filePath));    // Output: must be app.js
console.log('Extension:', path.extname(filePath)); // Output:   must be .js
