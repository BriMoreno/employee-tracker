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
  // if else loop to take to them to were they need and to end connection when they exit
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
    db.end();
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
  var role = "SELECT * FROM role";
  db.query(role, function(err,res){
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
  
  })
}

addEmploy()
updateEmploy()


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
};