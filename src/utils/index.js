export const ActionsEnum = {
  DISPLAY_OPERATION: 'DISPLAY_OPERATION',
  CALCULATE_OPERATION: 'CALCULATE_OPERATION',
  CLEAR_DISPLAY: 'CLEAR_DISPLAY'
};

const availableOperators = ['+', '-', '*', '/'];

export function isOperator(val) {
  if(!val) return false;
  return availableOperators.includes(val);
}

function validateExpression(expString) {
  const expArray = expString.split(',');
  
  const firstIdx = 0;
  const lastIdx = expArray.length - 1;

  if(availableOperators.includes(expArray[firstIdx]) || availableOperators.includes(expArray[lastIdx])) {
    return false;
  }
  return true;
}

export function calculateExpression(expWithComma, expWithoutComma) {
  if(!!validateExpression(expWithComma)) return eval(expWithoutComma).toString();
  else return 'error';
}

