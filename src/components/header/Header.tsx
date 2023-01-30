import React from 'react'
import Logo from '../../assets/images/dashboard_logo.png'
import {SearchOutlined, NotificationsNone, ArrowDropDown } from '@material-ui/icons'
import Avatar from '../../assets/images/avatar.png'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import BriefCaseBiz from '../../assets/icons/briefcase_Biz.png'
import HomeIcon from '../../assets/icons/home.png'
import {KeyboardArrowDownSharp} from '@material-ui/icons';
import Customers from '../customers/Customers'
import Business from '../business/Business'
import Settings from '../settings/Settings'

const Header = () => {
    //toggle menu hambuger
    const toggleMenu = () => {
        let menuContent: any = document.querySelector('.mobile__menu__content');
        if(window.getComputedStyle(menuContent).display === "none") {
            menuContent.style.display = "block";
        } else {
            menuContent.style.display = "none";
        }
    }
  return (
    <header>
        <div className="header__wrapper">
            <div className="header_left">
                <div className='mobile_menu'>
                    <div onClick={toggleMenu} className="menu-icon"><MenuIcon /></div>
                    <div className='mobile__menu__content'>
                        <ul className='menu__heading'>
                            <li>
                                <img src={BriefCaseBiz} alt="briefcase" />
                                Switch Organization 
                                <span>
                                    <KeyboardArrowDownSharp />
                                </span>
                            </li>
                            <li>
                            <Link to="/dashboard">
                            <img src={HomeIcon} alt="briefcase" />
                                Dashboard
                                </Link>
                            </li>
                        </ul>
                        <Customers />
                        <Business />
                        <Settings />
                    </div>
                </div>
                <Link to="/">
                    <img src={Logo} alt="logo"/>
                </Link>
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
