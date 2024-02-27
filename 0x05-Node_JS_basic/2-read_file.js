const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  // read csv
  const csv = fs.readFileSync(path, 'utf8');
  const rows = csv.trim().split('\n');
  const students = rows.slice(1);

  // filter by major
  let csStudents = students.filter((student) => student.split(',')[3] === 'CS');
  let sweStudents = students.filter((student) => student.split(',')[3] === 'SWE');

  // filter by first name
  csStudents = csStudents.map((csStudents) => csStudents.split(',')[0]);
  sweStudents = sweStudents.map((sweStudents) => sweStudents.split(',')[0]);

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
}

countStudents("database.csv");

module.exports = countStudents;
