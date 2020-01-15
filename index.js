var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "employeetracker"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("databaseconnected");
  displaymenu();
});

function addemployee() {
  var query = connection.query(
    "insert into employee set ?",
    {
      first_name: "John",
      last_name: "Gazz",
      role_id: 1,
      manager_id: 1
    },
    function(error, response) {
      if (error) throw error;
    }
  );
}

function viewemployees() {
  var query = connection.query(
    "select * from employee ",
    {
      first_name: "John",
      last_name: "Gazz",
      role_id: 1,
      manager_id: 1
    },
    function(error, response) {
      if (error) throw error;
    }
  );
}

function updateemployee() {
  var query = connection.query(
    "update * employee set ? where ?",
    {
      first_name: "John",
      last_name: "Gazz",
      role_id: 1,
      manager_id: 1
    },
    function(error, response) {
      if (error) throw error;
    }
  );
}
function getemployeedetails() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstname",
        message: "enterfirstname"
      },
      { type: "input", name: "lastname", message: "enterlastname" },
      { type: "input", name: "roleid", message: "enterroleid" },
      { type: "input", name: "managerid", message: "entermanagerid" }
    ])
    .then(function(response) {
      console.log(response);
    });
}

function displaymenu() {
  inquirer
    .prompt([
      {
        name: "choices",
        type: "list",
        message: "enter choice",
        choices: ["new employee", "update employee", "displayemployees"]
      }
    ])
    .then(function(response) {
      console.log("response is: ", response);
      switch(response.choices){

          case "new employee":
          addemployee();
          case "update employee":
          updateemployee();
          case "displayemployees":
          viewemployees();}
    });
}
