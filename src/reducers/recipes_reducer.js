export default (state = [], action) => {
  switch(action.type) {
    

    case 'CREATE_RECIPE':
      return state.concat(action.recipe);

    

    


    default:
    return state;
  }
}
