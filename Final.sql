create database customreports;
use customreports;
create table product(
productid int primary key auto_increment,
productname varchar(30),
productcost decimal(13,2),
category varchar(30));

create table merchant(
merchantid int primary key auto_increment,
merchantname varchar(30),
email varchar(60),
password varchar(30));

create table transactions(
transactionid int primary key auto_increment,
merchantid int,
billingaddress int,
timestamps timestamp ,
foreign key (merchantid) references merchant(merchantid)
);
alter table transactions modify billingaddress text;
alter table transactions add column pincode int;
update transactions set billingaddress = "Kanpur" where transactionid = 1;
create table transactionproduct(
transactionid int,
custid int,
custname varchar(30),
productid int,
quantity int,
foreign key (productid) references product(productid),
foreign key (transactionid) references transactions(transactionid));

alter table transactionproduct add column totalamount decimal(13,2) after quantity;

create table merchantpreferences(
merchantid int,
pincode SET("208017","208001","202001","231225","500016","123456"),
foreign key (merchantid) references merchant(merchantid));

select * from product;
insert into product(productname, productcost,category) values ("ParleG",10,"Bicuits"),("Frooti",90,"Soft Drinks"),("Uncle Chips",20,"Chips");
insert into merchant(merchantname,email,password) values("Sahil","Sahil@gmail.com","Sahil123"),("Ajay","Ajay@gmail.com","Ajay123");
select * from merchant;
select * from transactions;
insert into transactions(merchantid, billingaddress,timestamps) values(1,208017,"2022-07-30 12:00:06"),(2,208001,"2022-06-16 08:00:00");
insert into transactionproduct values(1, 1, "Anshuman",1,3,30),(1,1,"Anshuman",2,2,180),(1,1,"Anshuman",3,1,20);
insert into merchantpreferences values(1,("208017,208001,123456"));

select * from merchantpreferences;
select * from transactions t , transactionproduct p where t.transactionid = p.transactionid;

alter table merchantpreferences modify pincode bigint;
alter table merchantpreferences add column custname varchar(30) ; 

insert into merchantpreferences(merchantid,pincode) values(1,208017);
insert into merchantpreferences(merchantid,upperlimit,lowerlimit) values(1,25000,10000);
desc merchantpreferences;
desc transactions;