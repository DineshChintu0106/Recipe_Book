import React, { useState } from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import ChickenRecipe from './ChickenRecipe'
import BeefRecipe from './BeefRecipe'
import SeafoodRecipe from './SeafoodRecipe'
import Vegetarian from './Vegetarian'
import Starter from './Starter'
import { login, logout } from '../Actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'


export default function Home(props) {
    const [data, setData] = useState('Chicken')

    const selector = useSelector(state => state.isLogin)
    console.log(selector)

    const navigate = useNavigate()

    const handleState = (e) => {
        setData(e.target.value)
    }


    const renderData = () => {
        switch (data) {
            case "Select":
                return <ChickenRecipe />

            case "Chicken":
                return <ChickenRecipe />

            case "Beef":
                return <BeefRecipe />

            case "Seafood":
                return <SeafoodRecipe />

            case "Vegetarian":
                return <Vegetarian />

            case "Starter":
                return <Starter />

            default:
                break;
        }
    }
    return (
        <div>
            <div className='home-container d-flex flex-column gap-4'>
                <nav className='navbar-top d-flex flex-row justify-content-between align-items-center'>
                    <Link to={'/home'}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKHKtDqeJFf5n3p0r7ZaEygQvBYK7R9qGsukhl9EFa1z10HKmD328xdtYsCidDQovVP4&usqp=CAU' alt='recipe' className='home-icon' /></Link>
                    <div className='d-flex flex-row gap-4 m-2'>
                        <Link to={'/home'} className='links'>Home</Link>
                        <Link className='links' to={'/savedrecipes'}>Saved recipe's</Link>
                        <Link to={'/profile'} className='links'>Profile</Link>
                    </div>
                </nav>
                <div className='d-flex flex-column align-items-center gap-2'>
                    <label className='text-light'>Select the type of recipee</label>
                    <select style={{ "width": "200px" }} placeholder='select' onChange={handleState}>
                        <option value={"Chicken"}>Chicken</option>
                        <option value={"Beef"}>Beef</option>
                        <option value={"Seafood"}>Seafood</option>
                        <option value={"Vegetarian"}>Vegetarian</option>
                        <option value={"Starter"}>Starter</option>
                    </select>
                </div>
                <div className='d-flex justify-content-center items-container'>
                    {renderData()}
                </div>


            </div>

        </div>

    )
}
