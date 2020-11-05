import React from 'react';
import { StatusBar } from 'react-native';

import Calculator from './src/components/Calculator';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Calculator />
    </>
  );
}