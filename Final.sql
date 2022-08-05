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
billingaddress text,
timestamps timestamp ,
pincode int,
foreign key (merchantid) references merchant(merchantid)
);

create table transactionproduct(
transactionid int,
custid int,
custname varchar(30),
productid int,
quantity int,
totalamount decimal(13,2),
foreign key (productid) references product(productid),
foreign key (transactionid) references transactions(transactionid));


create table merchantpreferences(
merchantid int,
upperlimit bigint,
lowerlimit bigint,
pincode bigint,
custname varchar(30),
foreign key (merchantid) references merchant(merchantid));

select * from product;
select * from merchant;
select * from transactions;
select * from merchantpreferences;
select * from transactionproduct;

desc merchantpreferences;
desc transactions;