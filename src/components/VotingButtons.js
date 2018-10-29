import React from 'react';
import cx from 'classnames';

const buttons = ['Camel', 'Duck', 'Donut', 'Potato', 'Mash potato'];
let buttonsSelected = [];

function VotingButtons({selectedButton, dispatch}){
  function handleClick(button){

    if(buttonsSelected.find(item => item===button)){
       buttonsSelected=buttonsSelected.filter(item=> item !== button);
      console.log(button, "3. Dispatch unselect action");
      dispatch({
        type: 'UNSELECT_BUTTON',
        selectedButton: buttonsSelected
      })
    } else {
      buttonsSelected.push(button);
      console.log(button, "3. Dispatch new button select action");
      dispatch({
        type: 'SELECT_BUTTON',
        selectedButton: buttonsSelected
      })
    }
  }

  function handleClearClick(event){
    event.preventDefault();
    console.log("7.Dispatch clear button action")
    buttonsSelected=[];
    dispatch({
      type:'RESET_BUTTON',
      selectedButton: buttonsSelected
    })
  }

  function handleSelectAll(event){
    event.preventDefault();
    console.log("7.Dispatch select all button action")
    dispatch({
      type:'SELECT_ALL_BUTTON',
      selectedButton: buttons
    })
  }

  return (
    <div>
      {buttons.map( button => {
        const classes = cx('voting-button', {
          'voting-button--selected': buttonsSelected.find(item => item ===button)
        }, {'voting-button--selected': selectedButton === buttons});
        return (
          <button
            key={button}
            className={classes}
            onClick={event => handleClick(button)}
          >{button}</button>

        );
      })}
      <button>
        <a href="#" onClick={handleClearClick}>Clear</a>
      </button>
      <button>
        <a href="#" onClick={handleSelectAll}>Select All</a>
      </button>
    </div>
  );
}


export default VotingButtons;
