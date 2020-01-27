create database employeetracker; 
use employeetracker; 

create table department(id int primary key auto_increment, name varchar(30));

create table role (id int auto_increment primary key, title varchar (30), salary decimal, department_id int, constraint fk1 foreign key (department_id) references department(id));

create table employee (id int auto_increment primary key, 
first_name varchar (30),
last_name varchar (30),
role_id int, constraint fk3 foreign key(role_id) references role(id), 
manager_id int, constraint fk2 foreign key(manager_id) references employee(id));

SELECT * from employee 