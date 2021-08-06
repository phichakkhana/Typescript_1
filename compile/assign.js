"use strict";
function createEmployee(config) {
    var newEmployee = { name: "David Backham", id: 0, age: 19, totalsalary: 15 };
    if (config.firstname && config.lastname) {
        newEmployee.name = config.firstname + " " + config.lastname;
    }
    if (config.id) {
        newEmployee.id = config.id;
    }
    if (config.age) {
        newEmployee.age = config.age;
    }
    if (config.salary && config.bonus) {
        if (config.bonus = true) {
            newEmployee.totalsalary = config.salary * 2.5;
        }
        else {
            newEmployee.totalsalary = config.salary;
        }
    }
    return newEmployee;
}
var emp1 = createEmployee({ firstname: "Phichakkhana", lastname: "jantupluang", id: 1, age: 19, salary: 600, bonus: true });
console.log('Employee : ', emp1);
