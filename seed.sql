use employeetracker; 

insert into department(name) values ('production'); 

insert into department(name) values ('Marketing'); 

insert into department(name) values ('sales'); 

insert into department(name) values ('HR'); 

insert into department(name) values ('Accounting'); 
select * from department; 
insert into role(title, salary, department_id) values ('manager', 2000,  1);
insert into role(title, salary, department_id) values ('manager', 2000,  2);
insert into role(title, salary, department_id) values ('manager', 2000,  3);
insert into role(title, salary, department_id) values ('manager', 2000,  4);
insert into role(title, salary, department_id) values ('manager', 2000,  5);
insert into role(title, salary, department_id) values ('teamlead', 2000,  1);
insert into role(title, salary, department_id) values ('teamlead', 2000,  2);
insert into role(title, salary, department_id) values ('teamlead', 2000,  3);
insert into role(title, salary, department_id) values ('teamlead', 2000,  4);
insert into role(title, salary, department_id) values ('teamlead', 2000,  5);

select * from role;

insert into employee(first_name, last_name, role_id, manager_id) values ('John', 'Smith', 1, null);
insert into employee(first_name, last_name, role_id, manager_id) values ('Carlos', 'Merr', 4, 6);
insert into employee(first_name, last_name, role_id, manager_id) values ('Sarah', 'King', 2, null);
insert into employee(first_name, last_name, role_id, manager_id) values ('Calra', 'Garcia', 7, 8);
insert into employee(first_name, last_name, role_id, manager_id) values ('Joe', 'Cassy', 3, null);
insert into employee(first_name, last_name, role_id, manager_id) values ('Carlos', 'Plato', 8, 8);
insert into employee(first_name, last_name, role_id, manager_id) values ('John', 'Moori', 4, null);
insert into employee(first_name, last_name, role_id, manager_id) values ('Dan', 'Moo', 9, 6);
insert into employee(first_name, last_name, role_id, manager_id) values ('John', 'Gonzales', 5, null);
insert into employee(first_name, last_name, role_id, manager_id) values ('Bertha', 'Bii', 6, 6);
insert into employee(first_name, last_name, role_id, manager_id) values ('John', 'Niki', 1, null);
insert into employee(first_name, last_name, role_id, manager_id) values ('Carlos', 'Mess',7, 8);

select * from employee; 