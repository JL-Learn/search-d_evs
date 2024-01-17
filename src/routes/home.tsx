import Search from '../components/Search';
import { UserProps } from '../types/user';
import { useState } from 'react';
import User from '../components/User';
import Error from '../components/Error';
import Loader from '../components/Loader';

const home = () => {

  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Função que carrega usuário da api do GitHub
  const loadUser = async(userName: string) => {

    setIsLoading(true);
    setError(false);
    setUser(null);

    // Acessa API do GitHub baseado no userName do usuário
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    // Parar de exibir ícone de carregamento assim que a solicitação for respondida
    setIsLoading(false);

    if(res.status === 404) {
      setError(true);
      return;
    }

    //console.log(data);

    // Efetua uma destructuring com as propriedades vindas do objeto data
    const {avatar_url, login, location, followers, following, twitter_username, blog, email, bio} = data;

    // Cria um novo objeto do tipo UserProps com as variáveis desestruturadas
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      twitter_username,
      blog,
      email,
      bio,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser}/>
      {isLoading && <Loader />}
      {/* SpreadOperator para incluir todas as propriedades do componente User 
      na variável user do componente Home, sem precisar citar uma por uma */}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
}

export default home;