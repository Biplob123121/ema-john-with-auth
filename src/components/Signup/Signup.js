import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmP, setConfirmP] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPBlur = event =>{
        setConfirmP(event.target.value);
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmP){
            setError('Password did not match');
            return;
        }
        if(password.length <6){
            setError('Minimum 6 charaters');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/shop');
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPBlur} type="password" name='confirm-password' required />
                    </div>
                    <p style={{color : 'red'}}>{error}</p>
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