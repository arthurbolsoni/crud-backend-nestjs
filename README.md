Antes de começar, certifique-se de preparar o ".env" file para rodar a aplicação com seu login do mySql e database;

Inicie a aplicaçao atrávez do comando no console: "npm install", "npm run migration:run' e 'npm run start:dev";
Uma vez a aplicaçao rodando você terá acesso aos seguintes endpoints:

# ENDPOINTS

## Cria uma entidade
POST -> http://localhost:3000/person -> cria uma entidade pessoa com base nas informaçãoes passadas atraves do body da requisição; caso entrego alguma incompatibilidade retorna a explicação do erro;

```
curl -XPOST -H "Content-type: application/json" -d '{ "name": "name", "IdCard": "88888888888", "personType": 2, "birthday": "2013-07-13T18:46:01.933Z", "address": { "CEP": "98495-258", "street": "Rua gonçalves", "number": 100, "district": "sagrada familia", "addressLineTwo": "", "city": "portoa alegre", "uf": "Rf", "addressType": 1 } }' 'http://localhost:3000/person/'
```


## Retornar todos
GET -> htpp://localhost:3000/person/ -> retorna todos os usuarios registrados
```
curl -XGET 'htpp://localhost:3000/person'
```
## Retornar pela ID
GET -> htpp://localhost:3000/person/:inteiro -> enviando o numero inteiro de id, será devolvido o usuario completo daquel id; ou erro caso nao exista; ou erro caso nao seja um id valido.
```
curl -XGET 'htpp://localhost:3000/person/1'
```
## Update informações
PUT -> http://localhost:300/person/:inteiro -> enviando o numero de id, e um body com informações do objeto para atualização, será retornado a confirmação da edição; ou erro caso nao exista; ou erro caso nao seja um id valido.
```
curl -XPUT -d '{ "name": "mudando de nome", }' 'htpp://localhost:3000/person/1'
```
## Delete pessoa
DELETE -> http://localhost:300/person/:inteiro -> enviando o numero inteiro de id, será devolvido uma confirmção de exclução; ou erro caso nao exista; ou erro caso nao seja um id valido.
```
curl -XDELETE 'htpp://localhost:3000/person/1'
```
