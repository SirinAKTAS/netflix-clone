import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header--title'>
           SirFlix 
        </h1>
        <nav className='header--nav'>
            <ul className='header--nav--ul'>
                <li className='header--nav--li'>Film</li>
                <li className='header--nav--li' >Série</li>
            </ul>
            <img src='../default-profile-pic.jpg' height={45} alt='profil-pic' />
        </nav>
    </header>
  )
}

export default Header