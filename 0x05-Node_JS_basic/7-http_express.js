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
  res.send('This is the list of our students');

  countStudents(process.argv[2])
    .then((result) => {
      const responseText = `Number of students: ${result.totalStudents}\n`
      + `Number of students in CS: ${result.csStudents.length}. List: ${result.csStudents.join(', ')}\n`
      + `Number of students in SWE: ${result.sweStudents.length}. List: ${result.sweStudents.join(', ')}`;
      res.end(responseText);
    });
});

app.listen(1245);

module.exports = app;
