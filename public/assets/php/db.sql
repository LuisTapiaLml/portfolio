CREATE TABLE `portfolio`.`conexiones` (

  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL,
  `hora` TIME NULL,
  `direccion` VARCHAR(20) NULL,
  `tipo` VARCHAR(20) NULL,
  PRIMARY KEY (`id`)

);
