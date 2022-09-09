Antes de começar, certifique-se de preparar o ".env" file para rodar a aplicação com seu login do mySql e database;

Inicie a aplicaçao atrávez do comando no console: "npm run migration:run' e 'npm run start:dev";
Uma vez a aplicaçao rodando você terá acesso aons seguintes endpoints:

POST -> http://localhost:3000/person -> cria uma entidade pessoa com base nas informaçãoes passadas atraves do body da requisição; caso entrego alguma incompatibilidade retorna a explicação do erro;
GET -> htpp://localhost:3000/person -> retorna todo os resgitros de pessoas
GET -> htpp://localhost:3000/person/:inteiro -> enviando o numero inteiro de id, será devolvido o usuario completo daquel id; ou erro caso nao exista; ou erro caso nao seja um id valido.
REMOVE -> htpp://localhost:3000/person/:inteiro -> enviando o numero inteiro de id, será devolvido o usuario completo daquel id; ou erro caso nao exista; ou erro caso nao seja um id valido.
PUT -> http://localhost:300/person/:inteiro -> enviando o numero de id, e um body com informações do objeto para atualização, será retornado a confirmação da edição; ou erro caso nao exista; ou erro caso nao seja um id valido.
DELETE -> http://localhost:300/person/:inteiro -> enviando o numero inteiro de id, será devolvido uma confirmção de exclução; ou erro caso nao exista; ou erro caso nao seja um id valido.