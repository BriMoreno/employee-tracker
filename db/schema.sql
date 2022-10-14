-- drop,create and use business db --
DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

-- Create the tables needed for department, role, and employee --
CREATE TABLE department (
    -- A column for id which cannot be empty --
    id INT AUTO_INCREMENT,

    -- A column for name capped at 30 characters and cannot be empty --
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id),
    -- connecting foreign key to the id in the department table ---
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id), 

    FOREIGN KEY (role_id)
    REFERENCES role(id)

    FOREIGN KEY(manager_id)
    REFERENCES employee(id),

);
