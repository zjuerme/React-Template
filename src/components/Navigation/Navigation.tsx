import styles from './Navigation.module.scss'
import logo from './images/header-logo.svg'
export const Navigation = () => {
  return (
    <div className={styles['layout']}>
      <img src={logo} />
      <div style={{ width: 200, display: 'flex', flexDirection: 'row' }}>
        <div>1233</div>
      </div>
    </div>
  )
}
