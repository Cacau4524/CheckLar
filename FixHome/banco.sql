CREATE DATABASE fixhome;

USE fixhome;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100)
);

CREATE TABLE servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(10,2)
);

INSERT INTO servicos(nome, descricao, preco)
VALUES
('Troca de Lâmpada', 'Serviço elétrico residencial', 50.00),
('Montagem de Móveis', 'Montagem profissional', 120.00),
('Hidráulica', 'Consertos hidráulicos', 150.00);