import React, { useEffect, useState } from 'react'
import './main.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import { addObject, chickenRecipes, favorite } from '../Actions/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function ChickenRecipe(props) {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const selector = useSelector(state => state.chickenRecipes)




  const getData = async () => {
    await axios.get("https://themealdb.com/api/json/v1/1/filter.php?c=Chicken").then((response) => {
      dispatch(chickenRecipes(response.data.meals.map(eachRecipe => {
        return { ...eachRecipe, isFavorite: false }
      })))
      setLoading(false)
    }).catch((e) => {
      console.log(e.message)
    })
  }


  const handleSearch = async (e) => {
    const { value } = e.target
    setSearch(value)
    if (search === '') {
      setFilter(selector)
    } else {
      const filteredData = await selector.filter(recipe => recipe.strMeal.toLowerCase().includes(value))
      const p = new Promise((resolve, reject) => {
        setFilter(filteredData);
        resolve()
      })
      p.then(() => {
        if (filteredData.length === 0) {
          setMessage("No Recipe's Found")
        }
        else {
          setMessage('')
        }
      })
    }

  }

  // const handleFavorite = (id) => {
  //   const p = new Promise((resolve, reject) => {
  //     setRecipes(selector.map((each) => {
  //       if (each.idMeal === id) {
  //         return { ...each, isFavorite: !each.isFavorite }
  //       }

  //       return each
  //     }));
  //     resolve();
  //   })
  //   p.then(() => {
  //     recipes.map((each) => {
  //       if (each.isFavorite === true) {
  //         dispatch(addObject(each))
  //       }
  //       return each
  //     })
  //   })

  // }
  const handleFavorite = (id) => {
    const promise = new Promise((resolve, reject) => {
      resolve(dispatch(favorite(id)));
    })
    promise.then(() => {
      selector.filter((each) => {
        if (each.isFavorite) {
          dispatch(addObject(each))
        }
        return dispatch(addObject(each))
      })
    })
  }



  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="d-flex flex-column gap-3">
      <h1 className='text-center text-light'>Chicken Recipe's</h1>
      <div className='d-flex flex-row justify-content-center'>
        <div className='left-search'></div>
        <input type='search' className='search-bar' placeholder='    Search recieps...' onChange={handleSearch} />
      </div>
      {loading ? <h1 className='text-light' align="center">Loading...</h1> :
        <div className='d-flex flex-wrap justify-content-center gap-5'>
          {search === '' ? selector.map((reciep) => {
            return <div className='reciep-container' key={reciep.idMeal}>
              <img src={reciep.strMealThumb} alt={reciep.idMeal} className='image-reciep' />

              <p>{reciep.strMeal}</p>
              <Link to={`/recipedetails/${reciep.idMeal}`}><button className='btn btn-danger'>Get Details</button></Link>
              {reciep.isFavorite ? <div className='bookmark' onClick={() => { handleFavorite(reciep.idMeal) }}><Icon.BookmarkFill className='text-danger' height={32} width={30} /></div> : <div className='bookmark' onClick={() => { handleFavorite(reciep.idMeal) }}><Icon.Bookmark height={32} width={30} /></div>}


            </div>
          }) :
            filter.map((recipe) => {
              return <div className='reciep-container' key={recipe.idMeal}>
                <img src={recipe.strMealThumb} alt={recipe.idMeal} className='image-reciep' />
                <p>{recipe.strMeal}</p>

                <Link to={`/recipedetails/${recipe.idMeal}`}><button className='btn btn-danger' style={{ height: "40px" }}>Get Details</button></Link>
                {recipe.isFavorite ? <div className='bookmark' onClick={() => { handleFavorite(recipe.idMeal) }}><Icon.BookmarkFill className='text-danger' height={32} width={30} /></div> : <div className='bookmark' onClick={() => { handleFavorite(recipe.idMeal) }}><Icon.Bookmark height={32} width={30} /></div>}
              </div>
            })}
          {message.length > 0 && <h1 className='text text-light'>{message}</h1>}
        </div>
      }

    </div>
  )
}
