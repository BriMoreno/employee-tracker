INSERT INTO department (name)
VALUES ("Customer Service"),
       ("Accounting"),
       ("Information Technology"),
       ("Administration"),
       ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Manager", 106413, 5),
       ("Accountant", 62995, 2),
       ("Communication Director", 190832, 4),
       ("IT Technician", 88000, 3),
       ("Customer Service Associate", 40000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Natalia", "Lafourcade", 1, 5), -- A great Mexican musician, check her out --
       ("Jessie", "Reyez", 2, 5), -- A great Colombian musician, check her out --
       ("Mon", "Laferte", 3, NULL), -- A great Chilean musician, check her out --
       ("Maye", "Osorio", 4, 5), -- A great Venezuelan musician, check her out --
       ("Boy", "Pablo", 5, 3); -- A great Chilean group, check them out --