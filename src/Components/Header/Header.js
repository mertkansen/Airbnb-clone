import React from 'react'
import './Header.css'

import {
    SearchIcon, Avatar, LanguageIcon, ExpandMoreIcon
} from '../indexer'

import {
    Link
} from 'react-router-dom'

const Header = () => {

    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png" 
                    alt="airbnb logo" 
                />
            </Link>
            
            <div className="header__center">
                <input />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
