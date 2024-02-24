set names utf8mb4;

drop database if exists `amberDb`;
create database `amberDb`;
use `amberDb`;

drop user if exists amberAdmin@localhost;
create user amberAdmin@localhost identified by 'AMBER_ADMIN_PW';
grant all on `amberDb`.* to amberAdmin@localhost;

create table `concerts` (
  `id` int not null auto_increment primary key,
  `title` varchar(200) not null,
  `when` datetime not null,
  `thumb` varchar(200) not null,
  `poster` varchar(200) not null,
  `facebook` varchar(100) not null,
  `programme` text
) engine=InnoDB;
