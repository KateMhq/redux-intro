import React from 'react';

function CountriesVisited(props){

function handleClick(event){
  console.log(event.target.textContent)
  props.dispatch({
    type: 'DELETE_COUNTRY',
    country: event.target.textContent
  })
}
  return(
    <ul>
      {props.countriesVisited.map(country =>
        <li key={country} onClick={handleClick}>
          {country}
        </li>)}
    </ul>
  )
}

export default CountriesVisited;
