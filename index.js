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
   var questions = [  {
    name: "firstname",
    type: "text",
    message: "enterfirstname"
  },
  {
    name: "lastname",
    type: "text",
    message: "enterlastname"
  },
  {
    name: "roleid",
    type: "list",
    message: "enterroleid",
    choices: [1,2,3,4,5,6,7,8,9,10]
  },{
  name: "managerid",
  type: "list",
  message: "managerid",
  choices: [6,8,12,14,17,19,21]

}]
 inquirer
    .prompt(questions)
    .then(function (val) {
      connection.query(
       "INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?, ?,?,?)",
       [val.firstname,val.lastname,val.roleid,val.managerid],
       function (err) {
         if (err) throw err;
         // If successful, alert the user, run makeTable again
         console.log("ADDED Employee!");
         displaymenu();
       }
     );
   });
}
 

 function viewemployees() {
  var query = connection.query(
    "select * from employee ",
    
    function(error, response) {
      if (error) throw error;
      console.log(response);
      displaymenu()
    }
  );

}
function adddepartment() {
  inquirer
   .prompt([
     {
       type: "input",
       name: "name",
       message: "What is the new department?"
     }
   ])
   .then(function (val) {
      connection.query(
       "INSERT INTO department (name) VALUES (?)",
       [val.name],
       function (err) {
         if (err) throw err;
         // If successful, alert the user, run makeTable again
         console.log("ADDED DEPARTMENT!");
         displaymenu();
       }
     );
   });
}

function updateemployee() {
  var query = connection.query(
    "update * employee set ? where ?",
    {
      first_name: "John",
      last_name: "Gazz",
      role_id: 1,
      manager_id: 6
    },
    function(error, response) {
      if (error) throw error;
    }
  );
}
function addrole() {
  inquirer
   .prompt([
     {
       type: "input",
       name: "title",
       message: "What is the title of this role?"
     },
     {
       type: "input",
        name: "salary",
       message: "What is the salary for this role?"
     },
     {
       type:"list",
       name:"departmentid",
       messaage:"Enter department id",
       choices:[1,2,3,4,5,6,7,8,9]
     }
   ])
   .then(function (val) {
      connection.query(
       "INSERT INTO role(title,salary,department_id) VALUES (?,?,?)",
       [val.title,val.salary,val.departmentid],
       function (err) {
         if (err) throw err;
         // If successful, alert the user, run makeTable again
         console.log("ADDED Role!");
         displaymenu();
       }
     );
   });
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
        choices: ["new employee", "displayemployees","add role", "add department", "exit"]
      }
    ])
    .then(function(response) {
      console.log("response is: ", response);
      switch(response.choices){
        case "exit":
          process.exit(0)
          break;
          case "new employee":
          addemployee();
          break;
          // case "update employee":
          // updateemployee();
          // break
          case"add department":
          adddepartment();
          break

          case "displayemployees":
          viewemployees();
          break
          case "add role":
          addrole()
       
        }
          
    });
}
