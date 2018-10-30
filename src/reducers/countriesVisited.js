const initialState={
  countriesVisited: []
}; //state might get complicated


function countriesVisited(state = initialState, action){
  switch(action.type){
    case 'ADD_COUNTRY':
      const newCountriesArr = state.countriesVisited.concat([action.country]);
      //alternatively we can use spread
      //const newCountriesArr=[...state.countriesVisited, action.country]
      const newCountryAdded = Object.assign({}, state, {
      countriesVisited: newCountriesArr
    });
      return newCountryAdded; //return a clone of state

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
