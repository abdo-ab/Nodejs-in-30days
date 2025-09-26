import os from 'node:os'; // Modern ESM import
// Code to fetch system information

const platform = os.platform();
const homeDir = os.homedir();
const totalMemoryGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);

console.log(`\n--- OS Module Output ---`);
console.log(`Platform: ${platform}`);
console.log(`User Home Directory: ${homeDir}`);
console.log(`Total System Memory: ${totalMemoryGB} GB`);
console.log(`Number of Cores: ${os.cpus().length}`);