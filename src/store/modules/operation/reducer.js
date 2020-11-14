import { ActionsEnum, isOperator, calculateExpression } from '../../../utils';

const INITIAL_STATE = {
  expString: '',
  display: '',
};

function operation(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ActionsEnum.DISPLAY_OPERATION:
      const { buttonValue } = action.payload;
      if((isOperator(state.display.substr(-1, 1)) && isOperator(buttonValue)) || ((state.display === '' || state.display === 'error') && isOperator(buttonValue))) {
        return { ...state }
      } else {
        return {
          expString: (state.display === '' || state.display === 'error') ? state.expString.concat(buttonValue) : state.expString.concat(',', buttonValue),
          display: (state.display === 'error') ? buttonValue.toString() : state.display.concat(buttonValue)
        }
      }
    case ActionsEnum.CALCULATE_OPERATION:
      return {
        expString: '',
        display: calculateExpression(state.expString, state.display)
      }
    case ActionsEnum.CLEAR_DISPLAY:
      return { ...INITIAL_STATE };
    default: 
      return state;
  }
}

export default operation;