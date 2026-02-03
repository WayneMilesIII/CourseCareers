/* 
    Write a JavaScript function named updateEmployeeSalary that takes three parameters:
an array of employee objects, an employee ID, and a new salary value. Each employee
object will have the following structure:

{
id: Number,
name: String,
position: String,
salary: Number,
    department: {
    name: String,
    location: String
    }
}
    The function should update the salary of the employee with the specified ID to the new
salary value provided. If the employee ID does not exist in the array, the function should
return null. After updating the salary, return the updated employee object.
    Example:
    const employees = [
{ id: 1, name: "John Doe", position: "Software Engineer", salary:
70000, department: { name: "Engineering", location: "New York" } },
{ id: 2, name: "Jane Smith", position: "Product Manager", salary:
80000, department: { name: "Product", location: "San Francisco" } }
];
updateEmployeeSalary(employees, 1, 75000);

{
id: 1,
name: "John Doe",
position: "Software Engineer",
salary: 75000,
department: { name: "Engineering", location: "New York" }
}

*/

function updateEmployeeSalary(employees, employeeId, newSalary) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === employeeId) {
            employees[i].salary = newSalary;
            console.log(employees[i]);
            return;
        }
    }   
    console.log(null);
}

const employees1 = [
{ id: 1, name: "John Doe", position: "Developer", salary: 60000, department: { name: "Development", location: "New York" } },
{ id: 2, name: "Jane Smith", position: "Designer", salary: 65000, department: { name: "Design", location: "San Francisco" } }
];

const employees2 = [
{ id: 1, name: "Alice Brown", position: "Manager", salary: 75000, department: { name: "Management", location: "London" } }
];

const employees3 = [
{ id: 1, name: "Bob Green", position: "Analyst", salary: 50000, department: { name: "Analytics", location: "Berlin" } }
];

const employees4 = [
{ id: 2, name: "Charlie Black", position: "Consultant", salary: 70000, department: { name: "Consulting", location: "Toronto" } }
];

const employees5 = [];

updateEmployeeSalary(employees5, 1, 85000);
updateEmployeeSalary(employees4, 2, 72000);
updateEmployeeSalary(employees3, 1, 48000);
updateEmployeeSalary(employees2, 3, 80000);
updateEmployeeSalary(employees1, 1, 65000);
