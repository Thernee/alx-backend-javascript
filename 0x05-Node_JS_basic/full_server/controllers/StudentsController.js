import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((result) => {
        res.statuscode = 200;
        res.write('This is the list of our students\n');
        res.write(`Number of students in CS: ${result.csStudents.length}. List: ${result.csStudents.join(', ')}\n`);
        res.end(`Number of students in SWE: ${result.sweStudents.length}. List: ${result.sweStudents.join(', ')}`);
      }).catch((err) => {
        res.end(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!major) {
      res.statuscode = 500;
      res.end('Major parameter must be CS or SWE');
    }
    if (major !== 'CS' && major !== 'SWE') {
      res.statuscode = 500;
      res.end('Major parameter must be CS or SWE');
    } else {
      res.statuscode = 200;
      readDatabase(process.argv[2])
        .then((result) => {
          if (major === 'CS') {
            res.end(`List: ${result.csStudents.join(', ')}`);
          } else {
            res.end(`List: ${result.sweStudents.join(', ')}`);
          }
        }).catch((err) => {
          res.end(err.message);
        });
    }
  }
}
