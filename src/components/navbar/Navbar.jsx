import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { Menu } from './Menu'
import './navbar.css'
import { routes } from './rutas'

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleAnchor = (event, link) => {
    event.preventDefault()
    const element = document.getElementById(link.slice(1))
    const headerOffset = 100
    const elementPosition = element.offsetTop
    const offsetPosition = elementPosition - headerOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <div className="gpt3__navbar-container">
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            {
              routes.map(route => (
                <p key={route.id} onClick={(e) => handleAnchor(e, route.link)}><a href={route.link}>{route.title}</a></p>
              ))
            }
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className="gpt3__navbar-menu" >
          {
            toggleMenu 
              ? <RiCloseLine color='#fff' size={27} onClick={handleToggle} />
              : <RiMenu3Line color='#fff' size={27} onClick={handleToggle} />
          }
          {
            toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu handleAnchor={handleAnchor} handleToggle={handleToggle}/>
                  <div className="gpt3__navbar-menu_container-links-sign">
                    <p>Sign in</p>
                    <button type='button'>Sign up</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
