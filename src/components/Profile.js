import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Actions/actions'
import { useSelector, useDispatch } from 'react-redux'

export default function Profile() {

  const selector = useSelector(state => state.isLogin)
  const active = useSelector(state => state.activeUser)
  console.log(active)
  console.log(selector)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleLogout = () => {
    alert('Logged out Successfully')
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div className='profile-container'>
      <nav className='navbar-top d-flex flex-row justify-content-between align-items-center'>
        <Link to={'/home'}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKHKtDqeJFf5n3p0r7ZaEygQvBYK7R9qGsukhl9EFa1z10HKmD328xdtYsCidDQovVP4&usqp=CAU' alt='recipe' className='home-icon' /></Link>
        <div className='d-flex flex-row gap-4 m-2'>
          <Link to={'/home'} className='links'>Home</Link>
          <Link className='links' to={'/savedrecipes'}>Saved recipe's</Link>
          <Link to={'/profile'} className='links'>Profile</Link>
        </div>
      </nav>
      {selector === null ? <h1>No saved recipes</h1> : (<><h1 className='text-center text-light'>Profile</h1>
        <div className='d-flex flex-column align-items-center gap-4'>
          <div className='profile-card d-flex flex-column justify-content-center align-items-center'>
            <p>username{" : " + active.username}</p>
            <Link to={'/savedrecipes'} style={{ textDecoration: "none", color: "black" }}><p>Saved Recipe's</p></Link>
          </div>
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        </div></>)}

    </div>
  )
}
