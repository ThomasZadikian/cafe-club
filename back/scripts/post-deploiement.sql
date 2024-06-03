/* 
Insert crucial values into the table when is necessary 
*/

INSERT INTO types (nom_type) VALUES
('cafe'),
('the'),
('chocolat');

INSERT INTO roles (role_name) VALUES
('User'),
('Admin');

INSERT INTO products (product_name, description, price, origin, id_type, number_of_sales) VALUES
('Café macchiato', 'A base de café  expresso et de lait mousseux, ce café macchiato a été préparé dans le plus grands respect de ses grains de café de Kona, directement importé d’Hawaï', 5.99, 'Hawaï', 1, 10),
('Thé macha', 'Originaire du japon, notre thé matca est fabriqué de manière naturelle, à l'ombre durant trois mois afin de conserver toute sa saveur et ses bien faits', 7.99, 'Japon', 2, 7),
('Chocolat Godiva', 'Un merveilleux chocolat chaud, préparé avec du lait crémeux dans lequel sera fondu un chocolat “Godiva” directement importé de Belgique', 7.99, 'Belgique', 3, 12),
('Thé rouge du monde', 'Ce thé, confectionné à partir d'une sélection pointilleuse de divers thé combine les saveurs sucrées et acidulées de baies telles que les fraises, les framboises et les cerises. IL  est une invitation à s'évader dans un jardin luxuriant de saveurs et de parfums.', 4.99, 'Monde', 2, 0),
('Café Kopi Luwak', 'Découvrez ce délicieux café fabriqué à partir des graines fermentée 'Kopi Luwak'. Appréciez sa puissance et son caractère, son amertume enveloppante et sa délicatesse déroutante', 6.99, 'Indonésie', 1, 0);
