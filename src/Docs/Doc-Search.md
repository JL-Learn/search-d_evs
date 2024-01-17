# Componente de pesquisa

Este componente permite ao usuário pesquisar um usuário pelo nome. Ele usa a função `loadUser` para buscar os dados do usuário no servidor.

## Detalhes de implementação

### 1. Importando Módulos Necessários

```
importe {BsSearch} de 'react-icons/bs';
importar {useState, KeyboardEvent} de 'react';
importar classes de './Search.module.css';
```

- Importamos o ícone `BsSearch` do pacote `react-icons/bs` para usar como ícone do botão de pesquisa.
- Importamos os ganchos `useState` e `KeyboardEvent` do pacote `react` para gerenciar o estado do componente e lidar com eventos de teclado.
- Importamos o objeto `classes` do arquivo `Search.module.css` para usar as classes CSS definidas nesse arquivo.

### 2. Definindo o componente `Search`

```
const Pesquisa = ({loadUser}: SearchProps) => {
```

- Definimos o componente `Search` como um componente funcional que usa uma função `loadUser` como suporte. Esta função é responsável por buscar os dados do usuário no servidor.

### 3. Gerenciando o estado do nome de usuário

```
  const [userName, setUserName] = useState("");
```

- Usamos o gancho `useState` para gerenciar o estado `userName`. Esta variável de estado armazena o nome de usuário inserido pelo usuário.

### 4. Manipulação do pressionamento da tecla Enter

```typescript
  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      loadUser(userName);
    }
  }
```

- Definimos uma função `handleKeyDown` que trata o evento `keydown` no campo de entrada.
- Se o usuário pressionar a tecla Enter, chamamos a função `loadUser` com o valor atual do estado `userName`.

### 5. Renderizando o componente de pesquisa

```typescript
  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <div className={classes.search_container}>
        <input 
          type="text" 
          placeholder='Digite o nome do usuário'
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => load