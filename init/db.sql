create database if not exists  user... character set utf8 collate utf8_general_ci;

create user 'user...'@'localhost' identified by '...';

grant all privileges on user... . * to 'user...'@'localhost' with grant option;

flush privileges;

insert into proyectos ( `nombre`,`descripcion`,`url`,`img` , `createdAt`,`updateTimestamp` , `repositorio` )  
values ( "QR Code Generator" , "Generador de Códigos QR" ,"http://www.qrcode.luisptapia.com" , "https://bucket.luisptapia.com/projects/qrcode/codigoqr.JPEG" , now(), now() , "https://github.com/LuisTapiaLml/qr_code_maker" );	

insert into proyectos ( `nombre`,`descripcion`,`url`,`img`, `createdAt`,`updateTimestamp`, `repositorio`)  
values ( "Mousike" , "Consumo de la Api de Deezer" ,"http://www.mousike.luisptapia.com" , "https://bucket.luisptapia.com/projects/mousike/mousike.JPEG" , now() , now() , "https://github.com/LuisTapiaLml/mousike" );

insert into proyectos ( `nombre`,`descripcion`,`url`,`img`, `createdAt`,`updateTimestamp`, `repositorio`)  
values ( "Organic Food" , "Landing page de restaurant de comida organica" ,"http://www.organic.luisptapia.com" , "https://bucket.luisptapia.com/projects/organic/organic.JPEG" , now() , now() , "https://github.com/LuisTapiaLml/restaurant_landing" );

insert into proyectos ( `nombre`,`descripcion`,`url`,`img`, `createdAt`,`updateTimestamp`, `repositorio`)  
values ( "Sector" , "Landing tienda skate" ,"http://www.vector.luisptapia.com" , "https://bucket.luisptapia.com/projects/sector/sector.png" , now() , now() , "https://github.com/LuisTapiaLml/sector" );

insert into proyectos ( `nombre`,`descripcion`,`url`,`img`, `createdAt`,`updateTimestamp`, `repositorio`)  
values ( "Halloween" , "Halloween page" ,"http://www.halloween.luisptapia.com" , "https://bucket.luisptapia.com/projects/halloween/halloween-img.jpg" , now() , now() , "https://github.com/LuisTapiaLml/halloween-page" );