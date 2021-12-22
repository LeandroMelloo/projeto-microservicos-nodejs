# projeto_microservicos_nodejs
Criando Microsserviços e Integrações com Node.js

# Conceitos essenciais do JavaScript

# Variáveis

Existem 3 modos de declarar:

var - escopo global e local, pode ter seu valor alterado;
let - escopo local de bloco, pode ter seu valor alterado;
const - escopo local de bloco, somente leitura;

Observações:
    var e let - não precisam de um valor inicial (vem por padrão como undefined);
    const - deve ter um valor inicial, e não pode ser alterada.

    variáveis podem guardar valores dos tipos: Boolean; null; undefined; Number; String; Array; Object; Function.

# Objetos

Dados que possuem propriedades e valores que definem suas características.

Exemplo:
    Imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções(quero café). Pode ser declarada assim:
        var xicara = {
            cor: 'azul',
            tamanho: 'p',
            funcao: tomarCafe()
        }

Objetos podem ser atribuídos à variáveis, e podem também guardar propriedades e valores, inclusive outros objetos ou arrays.

    Exemplo: Uma caixa com livros dentro.

# Funções

Conjuntos de instruções para realizar determinadas tarefas.
Há 3 modos definir funções:

Declaração - uso comum, deve ser nomeada:
    Exemplo: function nomeDaFuncao() {};

Expressão - função atribuída a expressões, nomeDaFuncao() {};
    Exemplo 1: var x = function nomeDaFuncao() {};
    Exemplo 2: var x = function() {};

Arrow Function - função de expressão de sintaxe curta, sempre anônima, não pode ser nomeada.
    Exemplo: var x = () => {};

# O que é Node.js?

O NodeJs é um ambiente de execução do JavaScript em server-side.

Ele nos dá a possibilidade de rodar localmente o Javascript fora do navegador por exemplo.

# Como o Node.js surgiu?

Todo navegador possui um interpretador de JavaScript rodando ali por trás dos panos para fazer as coisas funcionarem corretamente.

Em 2009 um estudante chamado Ryan Dahl criou o Node.js a partir do interpretador do navegador Chrome, o famoso JavaScript Engine V8.

Com isso temos a possibilidade de rodar o JavaScript fora do navegador, diminuindo o processamento e trabalhando com interpretação em tempo real meus amigos.

# Como o Node.js funciona?

O Node.js trabalha com single-thread. Imagine que cada requisição é um pedido de delivery.

As requisições no Node.js são assíncronas, agilizando assim a entrega. Entregador em Event-Loop.

Com isso abordamos os conceitos de Blocking, Non-blocking e Event-Loop.

    - Blocking - síncrono, pois a entrega depende que todas as requisições estejam prontas.
    - Non-blocking - assíncrono, pois a entrega é feita mesmo sem todas as requisições estarem prontas. (trabalha com o Event-Loop).
    - Event-loop - execução das requisições de forma assíncrona.

# Vantagens do Node.js

    - Flexibilidade
    - Leveza
    - Escalabilidade
    - Redução de custos
    - Maior repositório do mundo - NPM
    - Mesma linguagem no frontend e backend

# O que é o NPM?

É uma ferramenta de gerenciamento de pacotes do Node.

Imagine um repositório gigantesco com inúmeras ferramentas de desenvolvimento...esse é o NPM do NodeJS.



