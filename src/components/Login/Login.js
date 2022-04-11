import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email'  required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required/>
                    </div>
                    <input className='form-submit' type="submit" name="Login" value='Login' id="" />
                </form>
                <p>
                    New in Ema-John? <Link id='signup-link' to='/signup'>Create An Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;