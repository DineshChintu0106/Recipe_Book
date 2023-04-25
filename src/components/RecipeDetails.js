import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Link } from "react-router-dom"
import './main.css'

export default function RecipeDetails(props) {
    const [details, setDetails] = useState([])
    const params = useParams()

    const getDetails = async () => {
        await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`).then((response) => {
            setDetails(response.data.meals[0])
            console.log(response.data.meals[0])
        })
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <div>
            <nav className='navbar-top d-flex flex-row justify-content-between align-items-center'>
                <Link to={'/home'}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKHKtDqeJFf5n3p0r7ZaEygQvBYK7R9qGsukhl9EFa1z10HKmD328xdtYsCidDQovVP4&usqp=CAU' alt='recipe' className='home-icon' /></Link>
                <div className='d-flex flex-row gap-4 m-2'>
                    <Link to={'/home'} className='links'>Home</Link>
                    <Link className='links' to={'/savedrecipes'}>Saved recipe's</Link>
                    <Link to={'/profile'} className='links'>Profile</Link>
                </div>
            </nav>
            <div className="details-container">

                <h1 className="text text-light"><strong>Recipe Instructions</strong></h1>
                <div className="details-card">
                    <h1>{details.strMeal}</h1>
                    <img src={details.strMealThumb} alt={details.strMeal} className="details-image" />

                    <div>
                        <h1>Ingredients</h1>
                        <ol>
                            <li>{details.strMeasure1 + " "}{details.strIngredient1}</li>
                            <li>{details.strMeasure2 + " "}{details.strIngredient2}</li>
                            <li>{details.strMeasure3 + " "}{details.strIngredient3}</li>
                            <li>{details.strMeasure4 + " "}{details.strIngredient4}</li>
                            <li>{details.strMeasure5 + " "}{details.strIngredient5}</li>
                            <li>{details.strMeasure6 + " "}{details.strIngredient6}</li>
                            <li>{details.strMeasure7 + " "}{details.strIngredient7}</li>
                            <li>{details.strMeasure8 + " "}{details.strIngredient8}</li>
                            <li>{details.strMeasure9 + " "}{details.strIngredient9}</li>
                            <li>{details.strMeasure10 + " "}{details.strIngredient10}</li>
                            <li>{details.strMeasure11 + " "}{details.strIngredient11}</li>
                            <li>{details.strMeasure12 + " "}{details.strIngredient12}</li>
                            <li>{details.strMeasure13 + " "}{details.strIngredient13}</li>
                        </ol>
                    </div>
                    <div>
                        <h1>Instructions :</h1>
                        <p>{details.strInstructions}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
