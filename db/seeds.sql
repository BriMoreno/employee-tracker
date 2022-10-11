USE business_db;
INSERT INTO department (name)
VALUES ("Administration/operations"),
       ("Research and development"),
       ("Human resources"),
       ("Customer service"),
       ("Accounting and finance");

INSERT INTO role(title, salary, department_id )
VALUES ("Administrator", 25.00),
       ("Manager", 18.00),
       ("Accountant", 30.00),
       ("Analyst", 30.00),
       ("Customer Service Representative", 17.00)
       ("Director", 50.00);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ("Alfur", "Aldric", 2),
       ("Mike", "Wazowski", 1),
       ("Marshall", "Lee", 3),
       ("Bella", "Ramsey", 4),
       ("Kaisa", "Hammarlund", 5);