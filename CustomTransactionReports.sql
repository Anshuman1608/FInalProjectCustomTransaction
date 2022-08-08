create database customtransactionreports;
use customtransactionreports;

desc transactionproduct;
create table merchant(
merchantid int primary key auto_increment,
merchantname varchar(30),
email varchar(30),
password varchar(30));

create table product(
productid int primary key auto_increment,
productname varchar(30),
productcost decimal(13,2),
category varchar(30));

create table customtransactions(
transactionid int primary key auto_increment,
custid int,
custname varchar(30),
merchantid int,
billingaddress text,
timestamps timestamp,
pincode int,
totalamount decimal(13,2),
foreign key (merchantid) references merchant(merchantid));

create table transactionproduct(
tpid int primary key auto_increment,
transactionid int,
productid int,
quantity int,
foreign key (transactionid) references customtransactions(transactionid),
foreign key (productid) references product(produtcid));