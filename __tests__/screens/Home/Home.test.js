import React from 'react';
import 'react-native';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';
import { render } from '@testing-library/react-native';

import HomeScreen from '@/screens/Home';

describe('tests in HomeScreen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<HomeScreen />);
  });

  test('renders correctly', () => {
    renderWithTheme(<HomeScreen />);
  });

  test('Should find the text Counter List is empty', () => {
    const { getByText, queryAllByText } = render(<HomeScreen />);

    getByText('Counter List is empty');
    expect(queryAllByText('Counter List is empty').length).toBe(1);
  });
});
