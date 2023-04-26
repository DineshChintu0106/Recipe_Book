import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import Profile from '../components/Profile';
import RecipeDetails from '../components/RecipeDetails'
import SavedRecips from '../components/SavedRecips';


export default class Routing extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route exact path='/' Component={Login}/>
                    <Route exact path='/Reciep_book' Component={Login}/> 
                    <Route exact path='/login' Component={Login}/>
                    <Route exact path='/register' Component={Register}/>
                    <Route exact path='/home' Component={Home}/>
                    <Route exact path='/profile' Component={Profile}/>
                    <Route exact path='/recipedetails/:id' Component={RecipeDetails}/>
                    <Route exact path='/savedrecipes' Component={SavedRecips}/>
                </Routes>
            </div>
        )
    }
}
