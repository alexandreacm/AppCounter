import React from 'react';
import { StatusBar } from 'react-native';

import colors from '@/theme/colors';

import Routes from '@/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle='light-content' />
      <Routes />
    </>
  );
}
