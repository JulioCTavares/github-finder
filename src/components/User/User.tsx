import { Link } from "react-router-dom"
import { UserProps } from "../../types"

import { MdLocationPin } from 'react-icons/md';
import styles from './styles.module.css'


const User = ({avatar_url, followers, following, location, login}: UserProps) => {
  return (
    <div className={styles.user} >
      <img src={avatar_url} alt={login} />
      <h2> {login} </h2>
      {
        location && (
          <p className={styles.location}>
            <MdLocationPin />
            <span>{location}</span>
           </p>
        )
      }
      <div className={styles.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={styles.number}>{following}</p>
        </div>

        <Link to={`repos/${login}`}>Ver Repositorios  </Link>

      </div>
    </div>
  )
}

export default User