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
    const [usererror,setUserError] = useState('')
    const [emailerror,setEmailError] = useState('')
    const [passerror,setPassError] = useState('')

    const naviagte = useNavigate()

    const selector = useSelector(state => state.userdata)
    console.log(selector)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || username === '' || password === '') {
            setFields('All fields are required')
        }else if(username.length < 5){
            setUserError('Username should be min 5 characters')
        }
        else{
            const promise = new Promise((resolve, reject) => {
                setFields('')
                setUserError('')
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

    const handleUsername = (e) => {
        const value = e.target.value
        setUsername(value)
        setFields('')
        if (value === '') {
            setUserError('Field is required')
        }else if(value.length < 5){
            setUserError('Username should be min 5 characters');
        }else{
            setUserError('')
        }

    }
    const handleEmail = (e) => {
        const value = e.target.value
        setFields('')
        setEmail(value)
        if (value === '') {
            setEmailError('Field is required')
        }else{
            setEmailError('')
        }
    }
    const handlePassword = (e) => {
        const value = e.target.value
        setFields('')
        setPassword(value)
        if (value === '') {
            setPassError('Field is required')
        }else{
            setPassError('')
        }
    }



    return (
        <div className='login-container'>
            <div className='login'>
                <h1 className='heading'>Register</h1>
                <form className='d-flex flex-column justify-content-center gap-3' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" value={username} onChange={handleUsername} />
                        {usererror.length > 0 && <p className='text-danger'>{usererror}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={handleEmail} />
                        {emailerror.length > 0 && <p className='text-danger'>{emailerror}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" value={password} onChange={handlePassword} />
                        {passerror.length > 0 && <p className='text-danger'>{passerror}</p>}
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
