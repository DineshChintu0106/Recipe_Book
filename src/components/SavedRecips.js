import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'

export default function SavedRecips() {
    const [state,setState] = useState([])

    const selector = useSelector(state => state.chickenRecipes)
    
    const getData = () => {
        const filter = selector.filter((each) => {
          if (each.isFavorite) {
            return each
          }
        })
        setState(filter)
    }


    useEffect(()=> {
       getData();
    },[])

    return (
        <div className='home-container'>
            <nav className='navbar-top d-flex flex-row justify-content-between align-items-center'>
                <Link to={'/home'}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKHKtDqeJFf5n3p0r7ZaEygQvBYK7R9qGsukhl9EFa1z10HKmD328xdtYsCidDQovVP4&usqp=CAU' alt='recipe' className='home-icon' /></Link>
                <div className='d-flex flex-row gap-4 m-2'>
                    <Link to={'/home'} className='links'>Home</Link>
                    <Link className='links' to={'/savedrecipes'}>Saved recipe's</Link>
                    <Link to={'/profile'} className='links'>Profile</Link>
                </div>
            </nav>
            <div className='d-flex flex-wrap justify-content-center gap-5'>
            {state.map((reciep) => {
            return <div className='reciep-container' key={reciep.idMeal}>
              <img src={reciep.strMealThumb} alt={reciep.idMeal} className='image-reciep' />

              <p>{reciep.strMeal}</p>

              <div className='d-flex justify-space-between'>
                <div></div>
                <Link to={`/recipedetails/${reciep.idMeal}`}><button className='btn btn-danger'>Get Details</button></Link>
                {reciep.isFavorite ? <div><Icon.BookmarkFill className='text-danger' height={32} width={30}/></div> : <div><Icon.Bookmark height={32} width={30} /></div>}
              </div>

            </div>
          })}
          </div>
        </div>
    )
}
