# App-Todo
# API TO DO
- Projeto de aplicativo "to do" do curso Resilia, no módulo 3

## INSTALAÇÃO

- Você precisa do "Node.js" instalado na sua máquina.

## Rotas
- O projeto foi feito usando o conceito de API REST com 4 verbos HTTP, que são eles: GET, POST, PUT e DELETE, utilizando-se de requisições à duas tabelas (usuário e tarefa), que retornam informações do banco de dados.

## Métodos

- Método GET:
Para consultar apenas um usuário ou uma tarefa, utilize o seu testador de requisições de preferência no método GET(insomnia, postman) e use as rotas, uma de cada vez: http://localhost:8000/usuario/:id,
http://localhost:8000/tarefa/:id,
Substitua o " :id " pelos identificadores do usuário, tarefa. O retorno será um json com as informações do usuário ou tarefa .

- Método POST
Para inserir um usuário, você terá que usar a rota http://localhost:8000/usuário no método POST com os seguintes dados no corpo da requisição:
```sh
{
	NOME: "Exemplo",
	EMAIL: "exemplo@exemplo.com",
	SENHA: "exemplo"
}
```
 
- E para tarefas : 
- Utilizar a rota http://localhost:8000/tarefa no método POST com os seguintes dados no corpo da requisição:
```sh
{
	TITULO: "Exemplo",
	DESCRICAO: "exemplo@exemplo.com",
	STATUS: "exemplo",
    DATACRICAO: "2021-02-16",
    ID_USUARIO: "1" 
}
```
- Método PUT : 
Na atualização de usuário, acessar a rota
http://localhost:8000/usuario/:id,
com o método PUT selecionado, substituindo o " :id " pelo identificador do usuário, com a mesma estrutura do método anterior(POST).
Apenas os campos de NOME,SENHA,EMAIL devem ser informados no corpo da requisição.
```sh
{
	NOME:"Exemplo2",
	EMAIL:"exemplo2@gmail.com",
	SENHA: "******" 
}
```
- Método DELETE
Para deletar um usuário, você terá que usar a rota :  http://localhost:8000/usuario/:id no método DELETE, substituindo o " :id " pelo identificador do usuário.

- Para deletar uma tarefa, você terá que usar a rota : http://localhost:8000/tarefa/:id no método DELETE, substituindo o :id pelo identificador da tarefa.

## Instalação

Com o Node.js instalado, clone o rrepositório e dentro do terminal no editor de texto ou cmd, execute " npm install", e depois de instalar execute  o  "npm start".

```sh
npm install
npm start
```

## Tecnologias e Ferramentas

- nodejs
- npm
- express
- express-validator
- body-parser
- sqlite3
- jest
- cors


## Autor 

https://github.com/JoaoLopes994

