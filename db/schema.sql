-- drop,create and use business db --
DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

-- Create the tables needed for department, role, and employee --
CREATE TABLE department (
    -- A column for id which cannot be empty --
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

    -- A column for name capped at 30 characters and cannot be empty --
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    -- connecting foreign key to the id in the department table ---
    FOREIGN KEY (roles_id)
    REFERENCES department(id)
    -- when deleted the id is set to null --
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY(manager_id)
    REFERENCES employee(id),

    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    -- when deleted the id is set to null --
    ON DELETE SET NULL
)
