const mysql = require('mysql');
const inquirer = require('inquirer');

var db = mysql.createConnection({

    host: "localhost",
    port: 3301,
    user: "root",
    password: "Bhjdfv12!@",
    database: "business_db"
  });


  db.connect(function(err) {
    if (err) throw err;
    menuItems();
  });

// Creating the menu for the options on the tables, editing/updating
function menuItems() {
  inquirer.prompt({
    name:"action",
    type:"list",
    message: "Select an option to continue",
    choices: [
      "View Departments",
      "View Roles",
      "View Employee List",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update Employee Record",
      "Exit"
    ]
  })
  // if else loop to take to them to were they need and to exit connection when they exit
  .then(function(selection) {
  if (selection.action === "View Departments"){
    viewDept();
  } else if (selection.action === "View Roles"){
    viewRole();
  } else if (selection.action === "View Employee List"){
    viewEmploy();
  } else if (selection.action === "Add a Department"){
    addDept();
  } else if (selection.action === "Add a Role"){
    addRole();
  } else if (selection.action === "Add an Employee"){
    addEmploy();
  } else if (selection.action === "Update Employee Record"){
    updateEmploy();
  } else if (selection.action === "Exit"){
    db.exit();
  }

})

//function to display data from db
function viewDept() {
  var depts = "SELECT * FROM department";
  db.query(depts, function(err,res){
    console.log(`--The Departments--`)
    res.forEach(department => {
      console.log(`ID: ${department.id} | Name: ${department.name}`)
    });
    menuItems();
  });
};

function viewRole() {
  var roles = "SELECT * FROM role";
  db.query(roles, function(err,res){
    console.log(`--The Roles--`)
    res.forEach(role => {
      console.log(`ID: ${role.id} | Title: ${role.title} | Department ID: ${role.department_id}`)
    });
    menuItems();
  });
};

function viewEmploy() {
  var employ = "SELECT * FROM employee";
  db.query(employ, function(err,res){
    console.log(`-- The Employees --`)
    res.forEach(employee => {
      console.log(`ID: ${employee.id} | Name: ${employee.first_name} ${employee.last_name} | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`)
    });
    menuItems();
  });
};

// editing and adding functions to change the db
function addDept() {
  inquirer.prompt({
    name: "department",
    type: "input",
    message: "What would you like to name this new department?",
  })
  .then(function(input){
    var insert = "INSERT INTO department (name) VALUES (?)";
    db.query(insert, input.department, function(err,res){
      console.log(`You have added: ${(input.department)}`)
    });
    viewDept();
  });
};

function addRole() {
  db.query(`SELECT * FROM department`, function(err, res){
    if (err) throw (err);
    inquirer.prompt([{
      name: "title",
      type: "input",
      message: "Input the title of the new Role: ",
    },
    {
      name: "salary",
      type: "input",
      message: "Input this role's salary: "
    },
    {
      name: "department",
      type: "list",
      message: "What department would this role fall under?",
      choices: function(){
        var deptArray = [];
        res.forEach(res => {
          deptArray.push(
            res.name
          );
        })
        return deptArray;
      }
    }
  ])
  .then(function(input){
    const dept = input.department;
    db.query('SELECT * FROM DEPARTMENT', function(err, res){
      if (err) throw (err);
      let filterDept = res.filter(function(res){
        return res.name == dept;
      })
     let id = filterDept[0].id;
     let insertValues = "INSERT INTO role (title, salary, department_id) VALUES(?, ?, ?)";
     let values = [input.title, parseInt(input.salary), id]
      console.log(values);
        db.query(insertValues, values,
          function(err, res, fields){
            console.log(`This role has been added ${(values[0]).toUpperCase()}.`)
          }) 
          viewRole();
        })
     })
  })
}

async function addEmploy(){
  db.query('SELECT * FROM role', function(err, result){
    if (err) throw (err);
  inquirer.prompt([{
    name: "firstName",
    type: "input",
    message: "What is the employee's first name?",
  },
  {
    name: "lastName",
    type: "input",
    message: "What is the employee's last name",
  },
  {
    name: "roleName",
    type: "list",
    message: "What role does the employee have?",
    choices: function() {
      roleArray = [];
        result.forEach(result => {
          roleArray.push(
            result.title
          );
        })
        return roleArray;
    }
  }
])
  .then(function(input){
    console.log(input);
    const role = input.roleName;
    db.query('SELECT * FROM role', function(err, res){
      if (err) throw (err);
      let filterRole = res.filter(function(res){
        return res.title == role;
      })
      let roleId = filterRole[0].id;
      db.query('SELECT * FROM employee', function(err, res){
        inquirer.prompt([{
          name:"manager",
          type: "type",
          message: "Who is their manager:",
          choices: function(){
            managerArray = [];
            res.forEach(res => {
              managerArray.push(res.last_name);
            })
            return managerArray;
          }
        }
      ]).then(function(managerBool){
        const manager = managerBool.manager;
        db.query('SELECT * FROM employee', function(err, res){
          if (err) throw (err);
          let filterManager = res.filter(function(res){
            return res.last_name == manager;
          })
          let managerId = filterManager[0].id;
          console.log(managerBool);
          let insertValues = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
          let values = [input.first_name, input.last_name, roleId,managerId]
          console.log(values);
           db.query(insertValues,values, function(err, res, fields){
            console.log(`This employee has been added: ${(values[0])}.`)
           })
           viewEmploy();
        })
      })
      })
    })
  })
})
}
function updateEmploy() {
  db.query('SELEC * FROM employee', function(err, result){
    if (err) throw (err);
    inquirer.prompt([{
      name: "employName",
      type: "list",
      message: "Whose role is being changed: ",
      choices: function(){
        employArray = [];
          result.forEach(result => {
            employArray.push (result.last_name);
          })
          return employArray;
      }
    }
  ])
  .then(function(input){
    console.log(input);
    const name = input.employName;
    db.query("SELECT * FROM role", function(err, res){
      inquirer.prompt([{
        name: "role",
        type: "list",
        message: "What is their new role?",
        choices: function() {
          roleArray = [];
          res.forEach(res => {
            roleArray.push(res.title);
          })
          return roleArray;
        }
      }
    ]).then(function(newRole) {
      const role = newRole.role;
      console.log(newRole.role);
  db.query('SELECT * FROM role WHERE title = ?', [role], function(err, res) {
  if (err) throw (err);
      let roleId = res[0].id;
      let query = "UPDATE employee SET role_id ? WHERE last_name ?";
      let values = [roleId, name]
      console.log(values);
       db.query(query, values,
           function(err, res, fields) {
           console.log(`You have updated ${name}'s role to ${role}.`)
          })
          viewEmploy();
          })
       })
   })
  })
})
}
}
 