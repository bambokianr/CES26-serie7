import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import store from './src/store';
import Calculator from './src/components/Calculator';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Calculator />
    </Provider>
  );
}