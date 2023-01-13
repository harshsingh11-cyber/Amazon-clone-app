import React from 'react';
import './Header.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';


function Header() {

const [{basket,user},dispatch] = useStateValue();

const handleAuthenticaton = ()=>{
    if(user){
        auth.signOut();
    }
}
    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />


            </Link>

            <div className="header__search">
                <input type="text" className='header__searchInput' />
                <BiSearchAlt2 className='header__searchIcon' />

            </div>

            <div className="header__nav">
            <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOn">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTw">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
                <div className="header__option">
                    <span className="header__optionLineOn">
                        Returns
                    </span>
                    <span className="header__optionLineTw">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOn">
                        Your
                    </span>
                    <span className="header__optionLineTw">
                        Prime
                    </span>
                </div>
                <Link to="checkout">
                <div className="header__optionBaket">
                    <SlBasket className='icon-basket' />
                    <span className='header__optionLineTw header__basketCount'>{basket?.length}</span>
                </div>
                </Link>
              
            </div>
        </div>
    )
}

export default Header
