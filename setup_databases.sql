create database spring_react_crud;
use spring_react_crud;
create table user (
    id bigint not null,
    email_address varchar(255),
    first_name varchar(255),
    last_name varchar(255),
    primary key (id)
);