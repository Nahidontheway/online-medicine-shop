import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>password</label>
                    <input type='password' name='password' required></input>
                </div>
                <button className='btn-submit' type='submit'>Submit</button>
            </form>
            <p className='register-para'>Don't have any account? Please <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;