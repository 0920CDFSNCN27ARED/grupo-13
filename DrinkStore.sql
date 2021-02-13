CREATE TABLE Usuarios (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre_completo VARCHAR(30) NOT NULL,
genero VARCHAR(15) NOT NULL,
email VARCHAR(50) NOT NULL,
contraseña VARCHAR(15) NOT NULL
);

CREATE TABLE Categorias (
id INT PRIMARY KEY AUTO_INCREMENT,
Nombre varchar(15) NOT NULL
);

CREATE TABLE Bebida (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre_bebida VARCHAR(30) NOT NULL,
precio DECIMAL NOT NULL,
id_categorias INT,
FOREIGN KEY (id_categorias) REFERENCES Categorias(id)

);

CREATE TABLE Stock (
id INT PRIMARY KEY AUTO_INCREMENT,
cantidad INT
);

CREATE TABLE Stock_Bebida (
id INT PRIMARY KEY AUTO_INCREMENT,
id_bebida INT,
id_stock INT,
FOREIGN KEY (id_stock) REFERENCES Stock(id),
FOREIGN KEY (id_bebida) REFERENCES Bebida(id)
);

CREATE TABLE Usuario_Bebida (
id INT PRIMARY KEY AUTO_INCREMENT,
id_bebida INT,
id_usuario INT,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
FOREIGN KEY (id_bebida) REFERENCES Bebida(id)
);