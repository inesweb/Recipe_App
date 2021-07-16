import { resetRecipeForm } from './recipeForm';

const API_URL = process.env.REACT_APP_API_URL;

// Action Creators


export const addRecipe = recipe => {
  return {
    type:'CREATE_RECIPE',
    recipe
  }
}






// Async actions



export const createRecipe = (recipe, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/recipes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({recipe: recipe})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(recipe => {
      dispatch(addRecipe(recipe))
      dispatch(resetRecipeForm())
      routerHistory.replace(`/recipes/${recipe.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace(`/recipes/new`)
     })
  }
}




function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
