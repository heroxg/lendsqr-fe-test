import React from 'react'
import Logo from '../../../src/assets/images/logo.png'
import LogoImage from '../../../src/assets/images/pablo-sign-in.png'

const Login = () => {
  return (
    <div className='login_container'>
        <div className="login_container_inner">
            <div className="login_left">
                <img src={Logo} alt='logo' />
                <img src={LogoImage} alt='logo-image' />
            </div>
            <div className="login_right">
                <h3>Welcome!</h3>
                <p>Enter details to login.</p>
                <form>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <p>forgot password?</p>
                    <input type="submit" value="login" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
