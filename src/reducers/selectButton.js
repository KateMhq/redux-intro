function selectButton( state = {}, action ){
  switch(action.type) {
    case 'SELECT_BUTTON':
      console.log(action.selectedButton, "4. updated redux state");
      return {
        selectedButton: action.selectedButton
      };
      case 'RESET_BUTTON':
      console.log(action.selectedButton, "4. updated redux state");
      return{
        selectedButton:undefined
      }
    default:

      return state;
  }
}

export default selectButton;
