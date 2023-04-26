const initialState = {
    isLogin: false,
    savedRecipe: [],
    chickenRecipes: [],
    beefRecipes : [],
    userdata:[{username:"Test",email:"test@gmail.com",password:"test"}],
    activeUser : {}
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                isLogin: !state.isLogin,
            };
        case "LOG_OUT":
            return {
                ...state,
                isLogin: !state.isLogin,
            };
        case "ADDOBJECT":
            return {
                ...state,
                savedRecipe: [...state.savedRecipe, action.payload]
            }
        case "CHICKENRECIPES":
            return {
                ...state,
                chickenRecipes: action.payload
            }
        case "BEEFRECIPES":
            return {
                ...state,
                beefRecipes:action.payload
            }
        case 'REGISTER':
            return {
                ...state,
                userdata: [...state.userdata,action.payload]
            }
        case "FAVORITE":
            return {
                ...state,
                chickenRecipes: [...state.chickenRecipes.map(each => {
                    if (each.idMeal === action.payload) {
                        return {...each,isFavorite : !each.isFavorite}
                    }
                    return each
                })]
            }
        case "BEEFFAVORITE":
            return {
                ...state,
                beefRecipes: [...state.beefRecipes.map(each => {
                    if (each.idMeal === action.payload) {
                        return {...each,isFavorite : !each.isFavorite}
                    }
                    return each
                })]
            }
        case "ACTIVEUSER":
            return {
                ...state,
                activeUser:action.payload
            }
        default:
            return state;
    }
};

export default counterReducer;