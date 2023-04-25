import React, { useState } from 'react';
import './main.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom'
import { activeUser, login } from '../Actions/actions';
import { useSelector, useDispatch } from 'react-redux';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmaiError] = useState(false);
    const [passwordError, setPasswordError] = useState(false)
    const [valid, setValid] = useState('');
    const [error, setError] = useState('')
    // const [data, setData] = useState([{ Email: "test@gmail.com", Password: "Dinesh" }])
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const data = useSelector(state => state.userdata)

    const handleLogin = async (e) => {
        e.preventDefault()

        if (email === '' || password === '') {
            setError("All fields are required to login")
        } else {
            setError("")
            data.map(each => {
                if (email === each.email && password === each.password) {
                    const p = new Promise((resolve, reject) => {
                        dispatch(login())
                        dispatch(activeUser(each))
                        alert("Login Successfull")
                        resolve()
                    })
                    console.log(p)
                    p.then(() => {
                        return navigate('/home')

                    })
                } else {
                    setValid('invalid username or password')
                }
                return each
            })



            // return navigate('/home')
        }

    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setValid('')
        if (e.target.value === '') {
            setEmaiError(true)
        } else {
            setEmaiError(false)
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setValid('')
        if (e.target.value === '') {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
    }

    return (
        <div className='login-container'>
            <div className='login'>
                <h1 className='heading'>Login</h1>
                <form onSubmit={handleLogin} className='d-flex flex-column justify-content-center gap-3'>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={handleEmail} />
                        {emailError && <span className='text text-danger'>Field is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" value={password} onChange={handlePassword} />
                        {passwordError && <span className='text text-danger'>Field is required</span>}
                    </div>
                    {valid.length > 0 && <p className='text text-danger'>{valid}</p>}
                    {error.length > 0 && <strong className='text text-danger'>{error}</strong>}
                    <div className="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-danger">Login</button>
                </form>
                <p className='text-end'>Don't have a account? <Link to={'/register'}>Register here</Link></p>
            </div>
        </div>

    )
}
export default Login;
