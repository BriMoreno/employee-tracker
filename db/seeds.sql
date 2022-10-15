USE business_db;

INSERT INTO department (name)
VALUES ("Customer Service"),
       ("Accounting"),
       ("Information Technology"),
       ("Administration"),
       ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Manager", 30, 5),
       ("Accountant", 25, 2),
       ("Communication Director", 18, 4),
       ("IT Technician", 20, 3),
       ("Customer Service Associate", 18, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Natalia", "Lafourcade", 1), -- A great Mexican musician, check her out --
       ("Jessie", "Reyez", 2), -- A great Colombian musician, check her out --
       ("Mon", "Laferte", 3), -- A great Chilean musician, check her out --
       ("Maye", "Osorio", 4), -- A great Venezuelan musician, check her out --
       ("Boy", "Pablo", 5); -- A great Chilean group, check them out --