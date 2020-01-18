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
 inquirer
    .prompt([
      {
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
        list: [1,2,3,4,5,6,7,8,9,10]
      },{
      name: "managerid",
      type: "list",
      message: "managerid",
      list: [6,8,12,14,17,19,21]
    }
    ])
    .then(function (userinput){
      return 
      connection.query(
        "insert into employee set ?",
        {
          first_name: userinput.firstname,
          last_name: userinput.lastname,
          role_id: userinput.roleid,
          manager_id: userinput.managerid
        })
      //   function(error, response) {
      //     if (error) throw error;
      //   }
      // );
    })
    .then(function (response){
      console.log(response)
      displaymenu()
    })
    .catch(function (error){
      console.log("error", error)
      displaymenu()
    })
  
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
        choices: ["new employee", "update employee", "displayemployees", "exit"]
      }
    ])
    .then(function(response) {
      console.log("response is: ", response);
      switch(response.choices){
        case "exit":
          process.exit(0)
          case "new employee":
          addemployee();
          case "update employee":
          updateemployee();
          case "displayemployees":
          viewemployees();
       
        }
          
    });
}
