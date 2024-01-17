import classes from "./Repos.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import { RepoProps } from "../types/repo"
import Loader from "../components/Loader"
import Repo from "../components/Repo"

const Repos = () => {

  // Objeto com todos os parâmetros da URL
  const { username } = useParams();
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    // Função assíncrona para obter os repositórios do usuário
    const loadRepos = async function(username: string) {

      setIsLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();

      // Após obter os repositórios deixar de exibir ícone de carregamento
      setIsLoading(false);

      // Ordenando por maior qtd de estrelas
      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      // Ordenando apenas os 5 repos
      //orderedRepos = orderedRepos.slice(0, 5);

      setRepos(orderedRepos);
      console.log(data);
    };

    // Checa pra ver se existem dados antes de evocar a função
    if(username) {
      loadRepos(username);
    }
  }, []);

  if(!repos && isLoading) {
    return <Loader />
  }

  return (
    <>
      <div className={classes.repos}>
        <BackButton />
        <h2 style={{color: '#b2b2b2'}}>Explore os repositórios de <span style={{color: '#8b00a0'}}>{username}</span></h2>
        {repos && repos.length === 0 && <p>Não há repositórios para {username}</p>}
        {repos && repos.length > 0 && (
          <div className={classes.repos_container}>
            {repos.map((repo: RepoProps) => (
              <Repo key={repo.name} {...repo}/>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Repos