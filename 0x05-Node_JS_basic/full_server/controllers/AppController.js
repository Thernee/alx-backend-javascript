export default class StudentsController {
  static getHomepage(req, res) {
    res.statuscode = 200;
    res.send('Hello Holberton School!');
  }
}
