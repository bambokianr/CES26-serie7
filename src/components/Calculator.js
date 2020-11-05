import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';
import Button from './Button';

export default function Calculator() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Input value="200" />
      </View>
      <View style={styles.row}>
        <Button isClear>clear</Button>
      </View>
      <View style={styles.row}> 
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>/</Button>
      </View>
      <View style={styles.row}>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>X</Button>
      </View>
      <View style={styles.row}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </View>
      <View style={styles.row}>
        <Button>.</Button>
        <Button>0</Button>
        <Button>=</Button>
        <Button>-</Button>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
