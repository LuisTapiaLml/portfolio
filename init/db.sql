create database if not exists  portfolio character set utf8 collate utf8_general_ci;

create user 'portfolio'@'localhost' identified by 'una_contrasena_segura';

grant all privileges on portfolio . * to 'portfolio'@'localhost' with grant option;

flush privileges;

--contrasena_mysql_seguraE!1

insert into proyectos ( `nombre`,`descripcion`,`url`,`img` , `createdAt`,`updateTimestamp`)  
values ( "QR Code Generator" , "Generador de Códigos QR" ,"http://www.qrcode.luisptapia.com" , "codigoqr.JPEG" , now(), now()  );	

insert into proyectos ( `nombre`,`descripcion`,`url`,`img`, `createdAt`,`updateTimestamp`)  
values ( "Organic Food" , "Landing page de restaurant de comida organica" ,"http://www.organic.luisptapia.com" , "organic.JPEG" , now() , now() );