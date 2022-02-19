# Mobi7-desafio

Bem vindos! Este repositório foi criado com o intuito de resolver o desafio proposto pela Mobi7.

O objetivo era criar uma aplicação de backend, com NodeJS e Express, utilizando a linguagem Javascript.

Nesta aplicação, o banco de dados guarda dados de latitude e longitude de pontos de interesse do cliente, que representam um local no mapa, e seu raio em metros.

E também possui outra collection que guarda dados de todos os carros, através da placa, e por onde eles passaram através de sua latitude e longitude.

Essa API vai ser utilizada para mostrar ao usuário, fazendo uma busca pela placa do carro, todos os locais de interesse que esse carro passou, a velocidade, o dia e hora, e se a ignição do carro estava ligada ou não, em todos os dias.

Ou fazendo uma busca através da placa e data, os mesmos dados, porém apenas na data estipulada.

O resultado deve ficar assim

```
"O veículo TESTE001 estava no dia 19/12/2018 às 15:22:01 à 28 km/h na posição (-25.56742701740896 -51.47653363645077) com ignição ligada"
```

## Tecnologias Utilizadas

Durante o desenvolvimento do projeto foram utilizadas algumas bibliotecas e ferramentas:

* express
* nodemon
* joi
* joi@date
* csvtojson

## Banco de dados

O Banco de dados utilizado neste projeto foi o MongoDB.

Ele foi escolhido pela não necessidade de relacionamentos entre tabelas, possuir melhor performance e por não poder eventualmente ter a consistência de informações.

## Executando a aplicação localmente

Antes de mais nada, é importante atentar-se que para rodar a aplicação, será necessário possuir o MongoDB instalado em sua máquina.
Para realizar a instalação, você pode seguir a documentação oficial [MongoDB](https://docs.mongodb.com/manual/installation/)

### Clonando o repositório

1. No seu terminal, acesse a pasta onde o repositório será clonado e execute:
```
git clone git@github.com:renanvamo/Mobi7-desafio.
```

2. Entre na pasta do repositório que você acabou de clonar:
```
cd Mobi7-desafio
```

3. Instale as dependências do projeto executando no terminal:
```
npm install
```

PS: Ao executar o comando, o script "preinstall" rodará automaticamente, ele é responsável por povoar o seu banco de dados.
Você verá uma mensagem: "O banco de dados 'Mobi7', com as collections 'positions' e 'pois', foi criado"

### Executando a aplicação

Execute no terminal:

para produção

```
npm start
```

para desenvolvimento
```
npm run dev
```

## Testes Manuais

Você também pode realizar testes manuais, utilizando a requisição `.get`, na rota `/location`. 

Para fazer isso, enquanto seu servidor está rodando, você pode inserir na url do seu navegador:
```
http://localhost:8080/location/?placa=TESTE001
```

Nesse caso, a placa solicitada é "TESTE001", você pode alterar para a placa que quiser fazer a busca

O retorno será um Log, em formato "json", contendo todos os dados que foram filtrados no banco de dados:
```
{
  "TESTE001": [
    "O veículo TESTE001 estava no dia 19/12/2018 às 15:22:01 à 28 km/h na posição (-25.56742701740896 -51.47653363645077) com ignição ligada",
    ...
  ]
}
```

O usuário também pode requisitar uma busca através da placa e data no seguinte formato:
```
http://localhost:8080/location/18-12-2018?placa=TESTE001
```

Neste caso, "18-12-2018" é a data, e "TESTE001" a placa e o retorno será o mesmo, porém apenas na data referida:
```
{
  "TESTE001": [
    "O veículo TESTE001 estava no dia 18/12/2018 às 00:18:25 à 0 km/h na posição (-25.363333 -51.468333) com ignição desligada",
    ...
  ]
}
```

Para fazer os testes acima, também existem aplicações que você pode utilizar além do seu navegador, como o Insomnia, Postman, ou mesmo o Thunder(VSCode).
Caso queira utilizar outros valores, é necessário manter o mesmo URL e mudar apenas os dados de `placa` e `data`.
