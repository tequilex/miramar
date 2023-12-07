import { useNavigate } from 'react-router-dom'
import logo from '../../img/icon.png'

import './header.styles.scss'


const Header = () => {
  const navigate = useNavigate()

  const goToAuth = () => {
    navigate('/auth')
  }

  return (
    <div className='header' >
      <div className="wrap">
        <img className="logo" src={logo} alt="logo" />
        <div className="name">AMIRAFEST</div>
      </div>
      <div onClick={goToAuth} className="toReg">Вход / регистрация</div>
    </div>
  )
}
export default Header