USE business_db;
INSERT INTO department (name)
VALUES ("Administration/operations"),
       ("Research and development"),
       ("Human resources"),
       ("Customer service"),
       ("Accounting and finance");

INSERT INTO role(title, salary, department_id )
VALUES ("Administrator", 25.00, 1),
       ("Manager", 18.00 1,),
       ("Accountant", 30.00, 5),
       ("Analyst", 30.00, 2),
       ("Customer Service Representative", 17.00, 4)
       ("Director", 50.00, 5);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ("Alfur", "Aldric", 1),
       ("Mike", "Wazowski", 2),
       ("Marshall", "Lee", 3),
       ("Bella", "Ramsey", 4),
       ("Kaisa", "Hammarlund", 5);