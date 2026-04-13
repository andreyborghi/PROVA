Professor,
Foram escolhidas as tabelas:
- Filmes
- Estilos
Endpoints implementados

1. CREATE: Inserção de novos registros
Criar estilo:
POST http://localhost:3000/estilos

Body:
{
  "nome": "Acao"
}

Criar filme:
POST http://localhost:3000/filmes

Body:
{
  "estilo": 1,
  "nome": "Matrix",
  "ano": "1999",
  "duracao": "136",
  "foto": "matrix.jpg",
  "sinopse": "Filme de ficcao cientifica.",
  "video": "matrix.mp4"
}

READ: Busca por ID e busca filtrada por nome

Buscar estilo por ID:
GET http://localhost:3000/estilos/1

Buscar estilo por nome:
GET http://localhost:3000/estilos?nome=Acao

Buscar filme por ID:
GET http://localhost:3000/filmes/1

Buscar filme por nome:
GET http://localhost:3000/filmes?nome=Matrix

UPDATE: Alteração de registros existentes

Alterar estilo:
PATCH http://localhost:3000/estilos/1

Body:
{
  "nome": "Acao Atualizado"
}

Alterar filme:
PATCH http://localhost:3000/filmes/1

Body:
{
  "nome": "Velozes",
  "ano": "2003"
}

DELETE: Remoção física de registros

Remover estilo:
DELETE http://localhost:3000/estilos/1

Remover filme:
DELETE http://localhost:3000/filmes/1


E o banco de dados pode fazer com esse codigo se quiser:

DROP DATABASE IF EXISTS ProvaProgramacaoAvancada;
CREATE DATABASE ProvaProgramacaoAvancada;
USE ProvaProgramacaoAvancada;

CREATE TABLE estilos (
  estilo TINYINT NOT NULL AUTO_INCREMENT,
  nome CHAR(15) NOT NULL,
  PRIMARY KEY (estilo)
);

CREATE TABLE filmes (
  filme INTEGER NOT NULL AUTO_INCREMENT,
  estilo TINYINT NOT NULL,
  nome CHAR(30) NOT NULL,
  ano CHAR(4) NOT NULL,
  duracao CHAR(3) NOT NULL,
  foto CHAR(45),
  sinopse LONGTEXT,
  video CHAR(45),
  PRIMARY KEY (filme),
  FOREIGN KEY (estilo) REFERENCES estilos(estilo)
);

INSERT INTO estilos (nome) VALUES ('Acao');
INSERT INTO estilos (nome) VALUES ('Drama');

INSERT INTO filmes (estilo, nome, ano, duracao, foto, sinopse, video)
VALUES (1, 'Matrix', '1999', '136', 'matrix.jpg', 'Filme de ficcao cientifica.', 'matrix.mp4');

INSERT INTO filmes (estilo, nome, ano, duracao, foto, sinopse, video)
VALUES (2, 'Titanic', '1997', '195', 'titanic.jpg', 'Romance e drama.', 'titanic.mp4');

SELECT * FROM estilos;
SELECT * FROM filmes;
