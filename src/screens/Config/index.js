import React from 'react';
import { useDispatch } from 'react-redux';

import colors from '@/theme/colors';

import {
  addCounter,
  removeCounter,
  increment,
  decrement
} from '@/store/slices/counterSlice';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  StyledBackground,
  StyledTitle,
  StyledButton,
  StyledTextButton,
  StyledContainerButton,
  StyledContainerControl,
  StyledImageButton,
  StyledTitleControls
} from './styles';

export default function Config() {
  const dispatch = useDispatch();

  function onAddNewCounter() {
    dispatch(addCounter());
  }

  function onRemoveCounter() {
    dispatch(removeCounter());
  }

  function onIncrement() {
    dispatch(increment());
  }

  function onDecrement() {
    dispatch(decrement());
  }

  return (
    <StyledBackground>
      <StyledTitle>Counters</StyledTitle>

      <StyledContainerButton>
        <StyledButton onPress={onAddNewCounter}>
          <StyledTextButton>Add Counter</StyledTextButton>
        </StyledButton>

        <StyledButton onPress={onRemoveCounter}>
          <StyledTextButton>Remove Counter</StyledTextButton>
        </StyledButton>
      </StyledContainerButton>

      <StyledTitleControls>Increment / Decrement </StyledTitleControls>
      <StyledContainerControl>
        <StyledImageButton onPress={onIncrement}>
          <Icon name='add' size={30} color={colors.SECONDARY} />
        </StyledImageButton>

        <StyledImageButton onPress={onDecrement}>
          <Icon name='remove' size={30} color={colors.SECONDARY} />
        </StyledImageButton>
      </StyledContainerControl>
    </StyledBackground>
  );
}
