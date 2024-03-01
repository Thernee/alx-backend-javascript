const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((result) => {
        const responseText = `Number of students: ${result.totalStudents}\n` +
      `Number of students in CS: ${result.csStudents.length}. List: ${result.csStudents.join(', ')}\n` +
      `Number of students in SWE: ${result.sweStudents.length}. List: ${result.sweStudents.join(', ')}`;
        res.end(responseText);
      }).catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(1245);

module.exports = app;
