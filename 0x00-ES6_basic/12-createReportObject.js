export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      // return Object.keys(employeesList).length;

      // Another way to write the commented code:
      return Object.entries(employeesList).length;
    },
  };
}
