-- View all departments
USE business_db;
SELECT * FROM department;

-- Viewing the role table
SELECT role.id, role.title, department.name AS department, salary 
FROM role
LEFT JOIN department 
ON role.department_id = department.id
ORDER BY role.id; 

-- Viewing employees
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS Manager
FROM role
LEFT JOIN employee 
ON role.id = employee.role_id
LEFT JOIN departments 
ON role.department_id = department.id
LEFT JOIN employee manager
ON employee.manager_id = manager.id
ORDER BY employee.role_id;

-- Adding department
INSERT INTO department SET 
name:

-- Adding role
SELECT * FROM department;

INSERT INTO role SET
title:
salary:
department_id:

-- Adding employee
SELECT title, id FROM role;

SELECT CONCAT(manager.first_name, " ", manager.last_name) AS manager_name, manager.id
FROM employee
LEFT JOIN employee manager
ON employee.manager_id = manager.id
WHERE employee.manager_id IS NOT NULL;

INSERT INTO employee SET 
first_name:
last_name:
role_id:
manager_id:

-- Updating employee role
SELECT * FROM employee;
SELECT * FROM role;

UPDATE employee SET 
id:
role_id: