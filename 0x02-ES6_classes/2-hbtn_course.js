export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    typeof name === 'string' ? this._name = name : (() => { throw new TypeError('Name must be a string'); })(); // eslint-disable-line no-unused-expressions
  }

  get name() {
    return this._name;
  }

  set length(length) {
    typeof length === 'number' ? this._length = length : (() => { throw new TypeError('Length must be a number'); })(); // eslint-disable-line no-unused-expressions
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
