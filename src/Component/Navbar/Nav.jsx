import React from 'react'
import './Nav.css'
import logo from '../images/logo-bookmark.svg'
import menu from './../images/icon-hamburger.svg'
import close from "./../images/icon-close.svg"
import l1 from "./../images/icon-facebook.svg"
import l2 from "./../images/icon-twitter.svg"

import { useState } from 'react'
const Nav = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <div className='navbar'>
        <div className='nav'>
            <h1><img src={logo} alt='sd' /></h1>
            <ul>
                <li>Features</li>
                <li>Price</li>
                <li>Contact</li>
                <button className='login'>Log in</button>

            </ul>
                    {/* </div>
TOOGLE MENU USING HAMBUREDR  */}
            <img className='hamburger' onClick={() => settoggle(true)} src={menu} alt='sd'/>
            </div>





        {toggle ? <div className={toggle ? "toggle" : "toggles"}>
        <div className="mobilemenu">
          <div className='menulogo'>
          <img className='menuimg' onClick={() => settoggle(false)} src={logo} alt='ds'/>
          <img onClick={() => settoggle(false)} src={close} alt='ds'/>
          </div>
        <div className="toggletext">
          <h6 className='totext'>Features</h6>
          <h6 className='totext'>Pricing</h6>
          <h6 className='totext'>Contact</h6>
          <button className='log'>Login</button>
        </div>
        <div className='social'>
            <img src={l1} alt='asd' />
            <img src={l2} alt='asd' />
        
        </div>
        
        </div>
            
           </div> :""}

    </div>
  )
}

export default Nav