import React from 'react'
import { Link } from 'react-router-dom'
import Customers from '../customers/Customers'
import Business from '../business/Business'
import Settings from '../settings/Settings'
import BriefCaseBiz from '../../assets/icons/briefcase_Biz.png'
import HomeIcon from '../../assets/icons/home.png'
import {KeyboardArrowDownSharp} from '@material-ui/icons';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='side__bar'>
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
  )
}

export default Sidebar
