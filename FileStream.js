const fs = require('fs');

const content = 'This is content to be written asynchronously.';

// Asynchronous file write operation
fs.writeFile('example_async.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File created or updated (Async Write)!');
});



// Asynchronous file read operation
fs.readFile('example_async.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content (Async Read):', data);
});




const contentSync = 'This is content written synchronously.';

// Synchronous file write operation
try {
  fs.writeFileSync('example_sync.txt', contentSync, 'utf8');
  console.log('File created or updated synchronously (Sync Write)!');
} catch (err) {
  console.error('Error writing to file synchronously:', err);
}




// Synchronous file read operation
try {
  const fileContent = fs.readFileSync('example.txt', 'utf8');
  console.log('File content (Sync Read):', fileContent);
} catch (err) {
  console.error('Error reading file synchronously:', err);
}



const additionalContentSync = '\nAdditional content appended synchronously.';

// Synchronous file append operation
try {
  fs.appendFileSync('example.txt', additionalContentSync, 'utf8');
  console.log('Content appended to file synchronously (Sync Append)!');
} catch (err) {
  console.error('Error appending to file synchronously:', err);
}


// Synchronous file read operation
try {
    const fileContent = fs.readFileSync('example.txt', 'utf8');
    console.log('File content (Sync Read):', fileContent);
  } catch (err) {
    console.error('Error reading file synchronously:', err);
  }