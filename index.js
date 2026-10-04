// Import the built-in http module
const http = require("http");
const lodash = require("lodash");
const numbers = [10, 20, 30, 40, 50];
const sum = lodash.sum(numbers);
// Define the hostname and port
const hostname = "127.0.0.1"; // localhost
const port = 3000; // Port number

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code
  res.statusCode = 200;

  // Set the response content type
  res.setHeader("Content-Type", "text/plain");

  // Send the response
  res.end(`Hello from Node.js Server!\nThe sum of numbers in array is ${sum}`);
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
