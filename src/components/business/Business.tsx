import React from 'react'
import { Link } from 'react-router-dom';
import BriefCaseBiz from '../../assets/icons/briefcase_Biz.png';
import Sack from '../../assets/icons/sack.png';
import Bank from '../../assets/icons/bank.png';
import Coin from '../../assets/icons/coins-solid.png';
import Transactions from '../../assets/icons/transaction.png'
import Galaxy from '../../assets/icons/galaxy.png'
import UserCog from '../../assets/icons/user-cog.png'
import ScrollNote from '../../assets/icons/scroll.png'
import ChartBar from '../../assets/icons/chart-bar.png'

const Business = () => {
  return (
    <div className='menu__card__wrap'>
       <h4>Businesses</h4> 
       <ul>
        <li>
            <Link to="/users">
                <img src={BriefCaseBiz} alt='usericon' />
                Organization
            </Link>
        </li>
        <li>
            <Link to="/guarantors">
                <img src={Sack} alt="users" />
                Loan products
            </Link>
        </li>
        <li>
            <Link to="/loans">
                <img src={Bank} alt="sack" />
                saving products
            </Link>
        </li>
        <li>
            <Link to="/models">
                <img src={Coin} alt="handshake" />
                fees and charges
            </Link>
        </li>
        <li>
            <Link to="/savings">
                <img src={Transactions} alt="piggyBank" />
                transactions
            </Link>
        </li>
        <li>
            <Link to="/loan">
                <img src={Galaxy} alt="savings" />
                services
            </Link>
        </li>
        <li>
            <Link to="/whitelist">
                <img src={UserCog} alt="whitelist" />
                service account
            </Link>
        </li>
        <li>
            <Link to="/karma">
                <img src={ScrollNote} alt="usertimes" />
                settlements
            </Link>
        </li>
        <li>
            <Link to="/karma">
                <img src={ChartBar} alt="usertimes" />
                reports
            </Link>
        </li>
       </ul>
    </div>
  )
}

export default Business
