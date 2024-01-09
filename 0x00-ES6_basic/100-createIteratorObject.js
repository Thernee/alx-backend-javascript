export default function createIteratorObject(report) {
  const employeesObject = Object.values(report.allEmployees);
  const employees = [];
  for (const val of employeesObject) {
    employees.push(...val);
  }
  return employees;
}
