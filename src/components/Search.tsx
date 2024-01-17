// import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react';
import classes from './Search.module.css';

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({loadUser}: SearchProps) => {

  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      loadUser(userName);
    }
  }

  return (
    <div className={classes.search}>
      <h2 style={{color: '#b2b2b2'}}>Busque por um usuário:</h2>
      <div className={classes.search_container}>
        <input 
          type="text" 
          placeholder='Digite o nome do usuário'
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          style={{color: '#ffffff'}}
          onClick={() => loadUser(userName)}
        >
          Pesquisar 
        </button>
      </div>
    </div>
  );
};

export default Search;