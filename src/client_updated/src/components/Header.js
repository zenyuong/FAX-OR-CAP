import {React, useState} from 'react'
import './Header.css'

const menuItems = [
  {
    title: "Home",
    url: "/",
    className: "nav-links"
  },
  {
    title: "URL",
    url: "/url",
    className: "nav-links"
  },
  {
    title: "Tweets",
    url: "/tweets",
    className: "nav-links"
  },
  {
    title: "Queries", 
    url: "/queries",
    className: "nav-links"
  }
]

function Header() {

  const [clicked, setClick] = useState(false)

  return (
    <nav className='Navbar-container'>
      <h1 className='navbar-logo'>FaxCap Co.</h1>
      <div className='menu-icon' onClick={()=>setClick(!clicked)}>
        <i className={ clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={ clicked ? "nav-menu active" : "nav-menu "}>
        {menuItems.map((item,index)=>{
          return(
            <li key={index}>
              <a className={item.className} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Header