import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Input({ value }) {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputText}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#000',
    width: '80%',
    height: 50,
    borderWidth: 0.7,
    borderColor: '#888',
  },
  inputText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});