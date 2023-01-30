import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import UserIcon from '../../assets/icons/user-friends.png'
import Users from '../../assets/icons/users.png'
import Sack from '../../assets/icons/sack.png'
import Handshake from '../../assets/icons/handshake-regular.png'
import PiggyBank from '../../assets/icons/piggy-bank.png'
import Savings from '../../assets/icons/savings.png'
import WhiteList from '../../assets/icons/user-check.png'
import UserTimes from '../../assets/icons/user-times.png'
import { useLocation } from 'react-router-dom'

const Customers = () => {
    const location = useLocation();
    const {pathname} = location;
    const splitLocation = pathname.split("/");

  return (
    <div className='menu__card__wrap'>
       <h4>Customers</h4> 
       <ul>
        <li className={splitLocation[1] === "users" ? 'active' : ""}>
            <NavLink to="/users" exact activeClassName="active">
                <img src={UserIcon} alt='usericon' />
                Users
            </NavLink>
        </li>
        <li className={splitLocation[1] === "guarantors" ? 'active' : ""}>
            <NavLink to="/guarantors" activeClassName="active">
                <img src={Users} alt="users" />
                Guarantor
            </NavLink>
        </li>
        <li className={splitLocation[1] === "loans" ? 'active' : ""}>
            <NavLink to="/loans" activeClassName="active">
                <img src={Sack} alt="sack" />
                Loans
            </NavLink>
        </li>
        <li className={splitLocation[1] === "models" ? 'active' : ""}>
            <NavLink to="/models" activeClassName="active">
                <img src={Handshake} alt="handshake" />
                Decision Models
            </NavLink>
        </li>
        <li>
            <Link to="#">
                <img src={PiggyBank} alt="piggyBank" />
                Savings
            </Link>
        </li>
        <li>
            <Link to="#">
                <img src={Savings} alt="savings" />
                Loan Request
            </Link>
        </li>
        <li>
            <Link to="#">
                <img src={WhiteList} alt="whitelist" />
                whitelist
            </Link>
        </li>
        <li>
            <Link to="#">
                <img src={UserTimes} alt="usertimes" />
                karma
            </Link>
        </li>
       </ul>
    </div>
  )
}

export default Customers
