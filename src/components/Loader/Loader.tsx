import styles from './styles.module.css'

import nyanCat from '../../assets/imgs/nyan-cat-1.gif'

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={nyanCat} alt="Loader" />
    </div>
  )
}

export default Loader