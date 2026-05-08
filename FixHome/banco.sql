CREATE DATABASE fixhome;
USE fixhome;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    tipo ENUM('cliente', 'prestador') DEFAULT 'cliente',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2),
    categoria VARCHAR(50),
    prestador_id INT,
    FOREIGN KEY (prestador_id) REFERENCES usuarios(id),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    servico_id INT,
    prestador_id INT,
    data_hora DATETIME NOT NULL,
    endereco TEXT NOT NULL,
    status ENUM('pendente', 'confirmado', 'concluido', 'cancelado') DEFAULT 'pendente',
    FOREIGN KEY (cliente_id) REFERENCES usuarios(id),
    FOREIGN KEY (servico_id) REFERENCES servicos(id),
    FOREIGN KEY (prestador_id) REFERENCES usuarios(id),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dados de teste
INSERT INTO usuarios (nome, email, senha, telefone, tipo) VALUES 
('João Silva', 'joao@fixhome.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '(11)99999-9999', 'cliente'),
('Maria Prestadora', 'maria@fixhome.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '(11)88888-8888', 'prestador');

INSERT INTO servicos (titulo, descricao, preco, categoria, prestador_id) VALUES 
('Conserto de Pia', 'Conserto de pia entupida ou vazando', 150.00, 'hidraulica', 2),
('Pintura de Parede', 'Pintura de 1 parede (até 3m²)', 200.00, 'pintura', 2),
('Instalação Elétrica', 'Instalação de tomada ou interruptor', 180.00, 'eletrica', 2);