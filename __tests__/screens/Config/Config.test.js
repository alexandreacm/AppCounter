import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import ConfigScreen from '@/screens/Config';

describe('tests in ConfigScreen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<ConfigScreen />);
  });

  test('renders correctly', () => {
    renderWithTheme(<ConfigScreen />);
  });
});
