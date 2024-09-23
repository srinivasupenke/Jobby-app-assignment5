import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoMdHome} from 'react-icons/io'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-mobile-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>

        <ul className="icons-container">
          <li>
            <Link to="/">
              <IoMdHome className="icons" />
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <BsBriefcaseFill className="icons" />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FiLogOut className="icons" onClick={onClickLogout} />
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-menu">
          <Link to="/">
            <li className="nav-menu-items">Home</li>
          </Link>
          <Link to="/jobs">
            <li className="nav-menu-items">Jobs</li>
          </Link>
        </ul>

        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
