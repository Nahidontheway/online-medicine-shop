import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Register</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>password</label>
                    <input type='password' name='password' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Confirm password</label>
                    <input type='password' name='password' required></input>
                </div>
                <button className='btn-submit' type='submit'>Register</button>
            </form>
            <p className='register-para'>Already have an account? Please <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;