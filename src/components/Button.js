import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import { displayOperation, calculateOperation, clearDisplay } from '../store/modules/operation/actions';

export default function Button({ children, isClear }) {
  const dispatch = useDispatch();

  const isSpecificOperator = useCallback(val => {
    return !isNaN(val) || val === "." || val === "=";
  }, []);

  const handleDisplayOperation = useCallback((val) => {
    const correctVal = val === "X" ? "*" : val;
    dispatch(displayOperation(correctVal));
  }, [dispatch]);
  
  const handleCalculateOperation = useCallback(() => {
    dispatch(calculateOperation());
  }, [dispatch]);

  const handleClearDisplay = useCallback(() => {
    dispatch(clearDisplay());
  }, [dispatch]);

  const handleActionToDispatch = useCallback(() => {
    if(isClear) handleClearDisplay();
    else if(children === "=") handleCalculateOperation();
    else handleDisplayOperation(children);
  }, [children, isClear, handleDisplayOperation, handleCalculateOperation, handleClearDisplay]);

  return (
    <TouchableOpacity 
      style={[styles.buttonWrapper, !isSpecificOperator(children) && styles.operatorButtonWrapper, isClear && styles.clearButtonWrapper]}
      onPress={handleActionToDispatch}
    >
      <Text style={[styles.buttonText, !isSpecificOperator(children) && styles.operatorButtonText]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e1e6',
    width: '20%',
    height: 50,
    borderWidth: 0.7,
    borderColor: '#888'
  },
  clearButtonWrapper: {
    width: '80%',
    backgroundColor: '#888',
  },
  operatorButtonWrapper: {
    backgroundColor: '#fe9241',
  },
  buttonText: {
    fontSize: 18,
    color: '#888'
  },
  operatorButtonText: {
    color: '#fff'
  }
});