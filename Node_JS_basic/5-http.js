const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const dbPath = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const originalLog = console.log;
      const logs = [];
      console.log = (msg) => {
        logs.push(msg);
        originalLog(msg);
      };

      await countStudents(dbPath);

      console.log = originalLog;
      res.end(logs.join('\n'));
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(port);

module.exports = app;
