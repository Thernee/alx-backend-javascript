const fs = require('fs');

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, csv) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // read csv
      const rows = csv.trim().split('\n');
      const students = rows.slice(1);

      // filter by major
      let csStudents = students.filter((student) => student.split(',')[3] === 'CS');
      let sweStudents = students.filter((student) => student.split(',')[3] === 'SWE');

      // filter by first name
      csStudents = csStudents.map((csStudents) => csStudents.split(',')[0]);
      sweStudents = sweStudents.map((sweStudents) => sweStudents.split(',')[0]);

      resolve({
        totalStudents: students.length,
        csStudents,
        sweStudents,
      });

      resolve();
    });
  });
}
