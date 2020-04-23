import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export const Header = () =>{
   return(
    <div className='header'>
        <Link className='' to="/">
            LoGo
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <Link to='/signin'>
                SIGN IN
            </Link>
        </div>
    </div>
   )     
}
