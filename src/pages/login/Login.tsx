import MainLogo from '../../../src/assets/images/logo.png';
import LoginImage from '../../../src/assets/images/login-img.png';
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from 'react'
import './Login.css';

interface LoginInput {
    email: string;
    password: string;
  }

const Login = () => {
    const [passwordShown, setpasswordShown] = useState(false);
    const { register, formState: { errors }, handleSubmit} = useForm<LoginInput>();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                email: e.target.value,
                password: e.target.value
            }
        })
    }

    //toggle show and hide password text
    const togglePassword = (event: React.MouseEvent) => {
        event.preventDefault()
        setpasswordShown(!passwordShown);
    }

    //handle form submit
    const onSubmit: SubmitHandler<LoginInput> = formData => {
        console.log(formData.email);
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form_wrap'>
                            <input type="email" placeholder='Email' 
                            {...register("email", { required: "Email address is required" })} 
                            onChange={handleChange}
                            />
                            <span className='error'>{errors.email && <p>{errors.email?.message}</p>}</span>
                        </div>
                        <div className='form_wrap'>
                            <input type={passwordShown ? "text" : "password"} placeholder="password" 
                            {...register("password", { required: "Password is required" })}
                            onChange={handleChange}
                            />
                            <span className='error'>{errors.password && <p>{errors.password?.message}</p>}</span>
                            <div className='show'>
                                <p onClick={togglePassword} className="password_text">
                                 {passwordShown ? "hide" : "show"}
                                </p>
                            </div>
                        </div>
                        <p className='pass'>forgot password?</p>
                        <input type="submit" value="log in" 
                        disabled={formData.email === "" && formData.password === ""}
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
