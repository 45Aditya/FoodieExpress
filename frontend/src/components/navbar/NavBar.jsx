import React, { useContext, useState } from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../contexts/StoreContext'

const NavBar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home")
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt="" className='logo'/>
      </Link>
      <ul className="navbar-menu">
        <Link className={menu==="Home" ? "active" : ""} onClick={()=>setMenu("Home")}>Home</Link>
        <a href='#explore-menu' className={menu==="Menu"  ? "active" : ""} onClick={()=>setMenu("Menu")} >Menu</a>
        <a href='#app-download' className={menu==="Mobile App" ? "active" : ""} onClick={()=>setMenu("Mobile App")}>Mobile-App</a>
        <a href='#footer'  className={menu==="Contact Us" ? "active" : ""} onClick={()=>setMenu("Contact Us")}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <Link to='/cart'>
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalCartAmount()===0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In </button>
      </div>
    </div>
  )
}

export default NavBar