import React, { useState } from 'react';
import './Navbar.css';
import { assets }  from '../../assets/assets'

const Navbar = (setShowLogin) => {

    const [menu, setMenu] = useState("home")

    return (
        <div className='navbar'>
            <img src={assets.logo} width="90" height="80" alt="" className='logo'/>
            <ul className='navbar-menu'>
                <li onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                <li onClick={()=> setMenu("shop")} className={menu==="shop"?"active":""}>Shop</li>
                <li onClick={()=> setMenu("page")} className={menu==="page"?"active":""}>Page</li>
                <li onClick={()=> setMenu("contact")} className={menu==="contact"?"active":""}>Contact</li>
            </ul>
            <div className='navbar-right'>
                <div>
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                </div>
            </div>
            
        </div>
    );
};


export default Navbar;