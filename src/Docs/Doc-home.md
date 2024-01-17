 # Componente Home

Este é um aplicativo React que permite pesquisar usuários do GitHub e exibir suas informações.

## Pré-requisitos

Para executar este aplicativo, você precisará do seguinte:

* Node.js e npm instalado

## Instalação

1. Clone o repositório em sua máquina local.
2. Digite `npm install`, no prompt de comando, no diretório do projeto.
3. Digite `npm run dev`, no prompt de comando, para iniciar a aplicação.

## Uso

Para usar o aplicativo, basta inserir um nome de usuário do GitHub na barra de pesquisa e clicar no botão “Pesquisar”. O aplicativo irá então buscar as informações do usuário na API do GitHub e exibi-las na tela.

## Visão geral do código

O aplicativo consiste dos seguintes componentes:

* Componente `Search`: Este componente contém a barra de pesquisa e o botão que aciona a pesquisa.
* Componente `User`: Este componente exibe as informações do usuário, como avatar, nome, localização, seguidores, seguindo, nome de usuário do Twitter, blog/site, e-mail e biografia.
* Componente `Error`: Este componente exibe uma mensagem de erro se o usuário inserir um nome de usuário inválido.
* Componente `Loader`: Este componente exibe um indicador de carregamento enquanto o aplicativo busca as informações do usuário.

A lógica principal do aplicativo está contida na função/componente `home`. Esta função/componente é responsável por buscar as informações do usuário na API do GitHub e exibi-las na tela.


A função `home` primeiro define três variáveis ​​de estado:

* `user`: Esta variável de estado armazena as informações do usuário.
* `error`: Esta variável de estado armazena se ocorreu um erro ao buscar as informações do usuário.
* `isLoading`: Esta variável de estado armazena se o aplicativo está atualmente buscando as informações do usuário.

A função `home` define uma função chamada `loadUser`. Esta função é responsável por buscar as informações do usuário na API GitHub.

A função `loadUser` primeiro define a variável de estado `isLoading` como `true`. Isso faz com que o indicador de carregamento seja exibido.

A função `loadUser` então faz uma solicitação à API do GitHub usando a função `fetch`. A solicitação é feita para a seguinte URL:

```
https://api.github.com/users/${userName}
```