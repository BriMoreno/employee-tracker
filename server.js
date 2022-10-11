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




// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
};