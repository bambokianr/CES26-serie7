import { ActionsEnum } from '../../../utils';

export function displayOperation(buttonValue) {
  return {
    type: ActionsEnum.DISPLAY_OPERATION,
    payload: { buttonValue }
  }
}

export function calculateOperation() {
  return {
    type: ActionsEnum.CALCULATE_OPERATION
  }
}

export function clearDisplay() {
  return {
    type: ActionsEnum.CLEAR_DISPLAY
  }
}