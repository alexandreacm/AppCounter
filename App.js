import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import store from '@/store';

import colors from '@/theme/colors';
import Routes from '@/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle='light-content' />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
