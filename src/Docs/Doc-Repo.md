**Repo: um componente React para exibir informações do repositório GitHub**

Este repositório contém um componente React chamado `Repo` que pode ser usado para exibir informações sobre um repositório GitHub. O componente leva as seguintes propriedades:

- `name`: O nome do repositório.
- `language`: A principal linguagem de programação usada no repositório.
- `html_url`: A URL do repositório no GitHub.
- `forks_count`: O número de forks do repositório.
- `stargazers_count`: O número de estrelas do repositório.

O componente `Repo` usa os seguintes ícones da biblioteca `react-icons`:

- `BsCodeSlash` para o ícone do idioma.
- `AiOutlineStar` para o ícone de estrela.
- `AiOutlineFork` para o ícone do garfo.
- `RiGitRepositoryLine` para o ícone do botão "Visualizar código".

O componente é estilizado usando módulos CSS e os estilos são definidos no arquivo `Repo.module.css`.

**Uso**

Para usar o componente `Repo`, simplesmente importe-o para o seu componente React e passe as propriedades apropriadas. Por exemplo:
```typescriptreact
import Repo from './Repo'

const MyComponent = () => {
  const repo = {
    name: 'my-repo',
    language: 'JavaScript',
    html_url: 'https://github.com/my-org/my-repo',
    forks_count: 10,
    stargazers_count: 20,
  }

  return (
    <Repo {...repo} />
  )
}
```

O componente `Repo` renderizará um div com a seguinte estrutura:

```html
<div class="repo">
  <h3>my-repo</h3>
  <p class="language">
    <BsCodeSlash />
    <span>JavaScript</span>
  </p>
  <div class="stats">
    <div>
      <AiOutlineStar />
      <span>20</span>
    </div>
    <div>
      <AiOutlineFork />
      <span>10</span>
    </div>
    <a href="https://github.com/my-org/my-repo" target="_blank" class="repo_btn">
      <span>Ver Código</span>