# Componente do usuário

Este componente exibe informações sobre um usuário GitHub. Ele recebe várias propriedades do usuário e as renderiza de maneira amigável.

## Detalhes de implementação

O componente é implementado usando a sintaxe do componente funcional no React. São necessários as seguintes propriedades:

- `avatar_url`: A URL da imagem do avatar do usuário.
- `login`: o nome de usuário do GitHub do usuário.
- `followers`: O número de seguidores que o usuário possui.
- `following`: O número de usuários que o usuário está seguindo.
- `location`: A localização do usuário.
- `twitter_username`: O nome de usuário do Twitter do usuário.
- `blog`: URL do blog ou site do usuário.
- `email`: O endereço de e-mail do usuário.
- `bio`: a biografia do usuário.

O componente primeiro renderiza a imagem de avatar e o nome de usuário do usuário. Se o usuário tiver uma biografia, ela será renderizada em seguida. Se o usuário tiver uma localização, ela será renderizada em seguida, juntamente com um ícone de localização. Se o usuário tiver um endereço de e-mail, ele será renderizado em seguida, junto com um ícone de e-mail.

O componente então renderiza as estatísticas do usuário, incluindo o número de seguidores e de seguindo. Se o usuário tiver um nome de usuário do Twitter, ele será renderizado em seguida, juntamente com um link para o perfil do usuário no Twitter. Se o usuário tiver um blog ou site, ele será renderizado em seguida, juntamente com um link para o blog ou site do usuário.

Por fim, o componente renderiza um link para o perfil GitHub do usuário.

## Partes de codigo

Aqui estão alguns trechos de código que mostram como o componente é implementado:

```typescriptreact
import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from './User.module.css';

const User = ({
  avatar_url, 
  login, 
  followers, 
  following, 
  location,
  twitter_username,
  blog,
  email,
  bio,
}: UserProps) => {

  return (
    <>
      <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h2 style={{color: '#8b00a0'}}>{login}</h2>
        {bio ? (