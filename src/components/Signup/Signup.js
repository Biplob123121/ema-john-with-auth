import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name='confirm-password' required />
                    </div>
                    <input className='form-submit' type="submit" name="Sign Up" value='Sign Up' id="" />
                </form>
                <p>
                    Already have an Account? <Link id='signup-link' to='/login'>Login</Link>      
                </p>
            </div>
        </div>
    );
};

export default Signup;