import MainLogo from '../../../src/assets/images/logo.png';
import LoginImage from '../../../src/assets/images/login-img.png';
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import React, { useState } from 'react'
import './Login.css';

const Login = () => {
    const [passwordShown, setpasswordShown] = useState(false);

    const togglePassword = (event: React.MouseEvent) => {
        event.preventDefault()
        setpasswordShown(!passwordShown);
    }

  return (
    <div className='login_container'>
        <div className='login_container_inner_wrapper'>
            <div className="login_container_inner">
                <div className="login_left">
                    <img src={MainLogo} alt='lendsqr-logo' className='logo'/>
                    <img src={LoginImage} alt='logo-image' />
                </div>
                <div className="login_right">
                    <h3>Welcome!</h3>
                    <p className='info'>Enter details to login.</p>
                    <form>
                        <input type="email" placeholder='email' />
                        <div className='pass_wrap'>
                            <input type={passwordShown ? "text" : "password"} placeholder="password" />
                            <div className='show'>
                                <p onClick={togglePassword} className="password_text">
                                 {passwordShown ? "hide" : "show"}
                                </p>
                            </div>
                        </div>
                        <p className='pass'>forgot password?</p>
                        <input type="submit" value="log in" />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
