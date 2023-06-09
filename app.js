// const http = require('http');
// const open = require('open');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
//   open(`http://${hostname}:${port}/`);
// });
import('open').then((open) => {
    const http = require('http');
    const hostname = '127.0.0.1';
    const port = 3000;
  
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(`<h2>Hello World</h2>`);
    });
  
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
      open.default(`http://${hostname}:${port}/#hello-world`);
    });
  }).catch((err) => console.error(err));