import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import HomeScreen from '@/screens/Home';

describe('tests in HomeScreen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<HomeScreen />);
  });

  test('renders correctly', () => {
    renderWithTheme(<HomeScreen />);
  });
});
