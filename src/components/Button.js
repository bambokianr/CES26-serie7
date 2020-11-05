import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ children, isClear }) {
  const isSpecificOperator = useCallback(val => {
    return !isNaN(val) || val === "." || val === "=";
  }, []);

  const handleActionToDispatch = useCallback(() => {
    alert('!!!!!!');
  }, []);

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