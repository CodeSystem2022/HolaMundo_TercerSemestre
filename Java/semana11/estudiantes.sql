SELECT * FROM estudiantes2022;
INSERT INTO estudiantes2022 (nombre, apellido, email, telefono) VALUES ('jose', 'perez', 'jose.pe@gmail.com', '123456789');
UPDATE estudiantes2022 SET nombre = 'juan carlos', apellido = 'garcia' WHERE id = 1;
DELETE FROM estudiantes2022 WHERE id = 3;
ALTER TABLE estudiantes2022 AUTO_INCREMENT = 1;
INSERT INTO estudiantes2022 (nombre, apellido, email, telefono) VALUES ('julian', 'perez', 'juli.pe@gmail.com', '123456789');
INSERT INTO estudiantes2022 (nombre, apellido, email, telefono) VALUES ('maria', 'lopez', 'marialopez@gmail.com', '789456456');
INSERT INTO estudiantes2022 (nombre, apellido, email, telefono) VALUES ('jose', 'luna', 'joseluna@gmail.com', '56478151');

