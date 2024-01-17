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
          <p>
            <span>{bio}</span>
          </p>
        ) : (
          ('')
        )}
        {location ? (
          <p className={classes.location}>
            <MdLocationPin/>
            <span>{location}</span>
          </p>
        ) : (
          <p>
            Sem Localização
          </p>
        )}
        {email ? (
          <p className={classes.location}>
            <MdLocationPin />
            <span>{email}</span>
          </p>
        ) : (
          ('')
        )}
        <div className={classes.stats}>
          <div>
            <p>Seguidores</p>
            <p className={classes.number}>{followers}</p>
          </div>
          <div>
            <p>Seguindo</p>
            <p className={classes.number}>{following}</p>
          </div>
        </div>
        {twitter_username ? (
          <div>
            <p style= {{paddingBottom: '1.5rem'}}>Twitter</p>
            <a href={`https://twitter.com/${twitter_username}/`} target="_blank">{twitter_username}</a>
        </div>
        ) : ('')}
        {blog ? (
          <div>
            <p style= {{paddingBottom: '1.5rem', paddingTop: '.5rem'}}>Site</p>
            <a href={blog} target="_blank">Contato</a>
          </div>
        ) : ('')}
        <p style= {{paddingTop: '.6rem'}}>Repositórios do(a) {login}</p>
        <div style= {{paddingTop: '.6rem'}}>
         <Link to={`/perfil/${login}`}>Ver projetos</Link>
        </div>
      </div>
    </>
  );
};

export default User;