import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../Actions/actions';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [fields,setFields] = useState('')
    const [success,setSuccess] = useState('')

    const naviagte = useNavigate()

    const selector = useSelector(state => state.userdata)
    console.log(selector)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || username === '' || password === '') {
            setFields('All fields are required')
        }else{
            const promise = new Promise((resolve, reject) => {
                setFields('')
            setUsername('')
            setEmail('')
            setPassword('')
            setSuccess("Registered Successfully please Login to continue");
            dispatch(register({username,email,password}))
            resolve();
            })
            promise.then(()=> {
                setTimeout(() => {
                    naviagte('/login')
                },2000)
                
            })
            
            
        }
    }



    return (
        <div className='login-container'>
            <div className='login'>
                <h1 className='heading'>Register</h1>
                <form className='d-flex flex-column justify-content-center gap-3' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    {fields.length > 0 && <strong className='text-danger'>{fields}</strong>}
                    {success.length > 0 && <strong className='text-success'>{success}</strong>}
                    <button type="submit" className="btn btn-danger">Register</button>
                </form>
                <p className='text-end'>Already have an account? <Link to={'/login'}>Login</Link></p>
            </div>
        </div>
    )
}
