import {NavLink, withRouter} from 'react-router-dom'
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
        <NavLink to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </NavLink>

        <ul className="icons-container">
          <li>
            <NavLink to="/">
              <IoMdHome className="icons" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs">
              <BsBriefcaseFill className="icons" />
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={onClickLogout}
              className="icon-logout-button"
            >
              <FiLogOut className="icons" />
            </button>
          </li>
        </ul>
      </div>

      <div className="nav-large-container">
        <NavLink to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </NavLink>

        <ul className="nav-menu">
          <NavLink
            exact
            to="/"
            className="nav-menu-items"
            activeClassName="active"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/jobs"
            className="nav-menu-items"
            activeClassName="active"
          >
            <li>Jobs</li>
          </NavLink>
        </ul>

        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
