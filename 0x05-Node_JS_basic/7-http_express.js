const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  countStudents(process.argv[2])
    .then((result) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${result.totalStudents}\n`);
      res.write(`Number of students in CS: ${result.csStudents.length}. List: ${result.csStudents.join(', ')}\n`);
      res.end(`Number of students in SWE: ${result.sweStudents.length}. List: ${result.sweStudents.join(', ')}`);
    }).catch((err) => {
      res.end(err.message);
    });
});

app.listen(1245);

module.exports = app;
