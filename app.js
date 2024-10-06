const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Log your name to the console
  console.log('Shruti Gupta');

  // Send a response to the browser
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Check your console for the printed name!');
});

// Make the server listen on port 4000
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
