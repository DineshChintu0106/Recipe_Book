export const login = () => {
    return {
      type: "LOG_IN",
    };
  };
  
export const logout = () => {
    return {
      type: "LOG_OUT",
    };
  };
export const addObject = (object) => {
    return {
        type : 'ADDOBJECT',
        payload: object
    }
}
export const chickenRecipes = (object) => {
    return {
        type : "CHICKENRECIPES",
        payload: object
    }
}
export const register  = (object) => {
  return {
    type: "REGISTER",
    payload : object
  }
}
export const favorite = (id) => {
  return {
    type : "FAVORITE",
    payload:id
  }
}
export const activeUser = (object) => {
  return {
    type: "ACTIVEUSER",
    payload : object
  }
}
export const beefRecipes = (object) => {
  return {
    type : "BEEFRECIPES",
    payload: object
  }
}

export const beefFavorite = (id) => {
  return {
    type : "BEEFFAVORITE",
    payload: id
  }
}

export const addBeefObject = () => {
  return
}