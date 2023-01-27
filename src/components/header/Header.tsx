import React from 'react'
import Logo from '../../assets/images/dashboard_logo.png'
import {SearchOutlined, NotificationsNone, ArrowDropDown } from '@material-ui/icons'
import Avatar from '../../assets/images/avatar.png'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="header__wrapper">
            <div className="header_left">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="header_center">
                <div className='search__wrap'>
                    <input type="type" placeholder="Search for anything" />
                    <button className='search-btn'>
                        <SearchOutlined />
                    </button>
                </div>
            </div>
            <div className="header_right">
                <a href='#' className='doc'>docs</a>
                <span className='notification'>
                    <NotificationsNone />
                </span>
                <img src={Avatar} alt='avart' className='avatar' />
                <p className='user__name'>Adedeji</p>
                <span><ArrowDropDown /></span>
            </div>
        </div>
    </header>
  )
}

export default Header
