import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs'

import styles from './style.module.css'

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}

const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState('')

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      loadUser(userName)
    }
  }

  return (
    <div className={styles.search} >
      <h1>Busque por um usuário</h1>
      <p>Conheça seus repositorios</p>
      <div className={styles.search_container}>
        <input type="text" placeholder='Digite o nome do usuário' 
        onChange={(e) => setUserName(e.target.value)} 
        onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)} >
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search