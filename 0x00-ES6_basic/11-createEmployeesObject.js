export default function createEmployeesObject(departmentName, employees) {
  const employeesData = {
    [departmentName]: employees,
  };

  return employeesData;
}
