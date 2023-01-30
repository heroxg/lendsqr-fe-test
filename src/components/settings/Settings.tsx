import { Link } from "react-router-dom"
import Mixer from "../../assets/icons/sliders-h.png"
import Fee from '../../assets/icons/badge-percent.png'
import Bank from '../../assets/icons/clipboard-list.png'

const Settings = () => {
  return (
    <div className='menu__card__wrap'>
       <h4>Settings</h4> 
       <ul>
        <li>
            <Link to="/preferences">
                <img src={Mixer} alt='usericon' />
                preferences
            </Link>
        </li>
        <li>
            <Link to="/fees">
                <img src={Fee} alt="users" />
                fees and pricing
            </Link>
        </li>
        <li>
            <Link to="/loans">
                <img src={Bank} alt="sack" />
                audit logs
            </Link>
        </li>
       </ul>
    </div>
  )
}

export default Settings
