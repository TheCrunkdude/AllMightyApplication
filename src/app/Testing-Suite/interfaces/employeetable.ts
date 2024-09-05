
export interface EmployeeTable {
    employeeID: number,
    deptID: number,
    age: number,
    firstName: string,
    lastName: string,
    salary: number

  }


export class EmployeeTable2 {
  constructor(
    public employeeId: number,
    public deptId: number,
    public firstName: string,
    public lastName: string,
    public salary: number
  ) {}

  // Method to provide a summary of the employee
  getSummary(): string {
    return `Employee ID: ${this.employeeId}, Name: ${this.firstName} ${this.lastName}, Department ID: ${this.deptId}, Salary: ${this.salary}`;
  }
}