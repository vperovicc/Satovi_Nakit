import React from 'react'
import '../styles/NavbarLogo.css'
import ArrowLeft from '../assets/strelica.svg'

const NavbarLogo = () => {
  return (
    <div className='nav'>
        <div className='navLeft'>
            <div className='buttonBlack'><p>Satovi</p></div>
            <img src='../src/assets/strelica.svg'/>
        </div>
        <div className='navCenter'>
            <img src='../src/assets/Logo.png' width={150}/>
        </div>
        <div className='navRight'>
            <img src='../src/assets/strelica2.svg'/>
            <div className='buttonBlack'><p>Nakit</p></div>
        </div>
    </div>
  )
}

export default NavbarLogo