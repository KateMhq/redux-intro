function countriesVisited(state = {
  countriesVisited: []
}, action){
  switch(action.type){
    case 'ADD_COUNTRY':
      const newCountryAdded = Object.assign({}, state, {
      countriesVisited: state.countriesVisited.concat([action.country])
    });
      return newCountryAdded;

    case 'DELETE_COUNTRY':
      const updatedArr = state.countriesVisited.filter(country=> country !== action.country)
      const updatedObj= Object.assign({}, state, {
        countriesVisited: updatedArr
      });
        return updatedObj;


    default:
      return state;
  }
}

export default countriesVisited;
