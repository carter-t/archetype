create table if not exists users
(
  ID serial primary key,
  tag varchar(60) not null unique,
  username varchar(30) unique,
  email varchar(60) not null unique,
  image text not null,
);