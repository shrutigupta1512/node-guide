const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Log the request URL, method, and headers
  console.log(req.url, req.method, req.headers);

  // Set the content type for the response
  res.setHeader('Content-Type', 'text/html');

  // Handle different URL routes
  if (req.url === '/home') {
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>Welcome home</h1></body>');
    res.write('</html>');
  } else if (req.url === '/about') {
    res.write('<html>');
    res.write('<head><title>About Us</title></head>');
    res.write('<body><h1>Welcome to About Us page</h1></body>');
    res.write('</html>');
  } else if (req.url === '/node') {
    res.write('<html>');
    res.write('<head><title>Node Js Project</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
  } else {
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
  }

  // End the response
  res.end();
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
