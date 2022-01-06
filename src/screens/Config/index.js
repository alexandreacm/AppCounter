import React from 'react';
import { useDispatch } from 'react-redux';
import { addCounter, removeCounter } from '@/store/slices/counterSlice';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  StyledBackground,
  StyledTitle,
  StyledButton,
  StyledTextButton,
  StyledContainerButton,
  StyledContainerControl,
  StyledImageButton
} from './styles';

export default function Config() {
  const dispatch = useDispatch();

  function addNewCounter() {
    dispatch(addCounter());
  }

  function deleteCounter() {
    dispatch(removeCounter());
  }

  return (
    <StyledBackground>
      <StyledTitle>Counters</StyledTitle>

      <StyledContainerButton>
        <StyledButton onPress={addNewCounter}>
          <StyledTextButton>Add Counter</StyledTextButton>
        </StyledButton>

        <StyledButton onPress={deleteCounter}>
          <StyledTextButton>Remove Counter</StyledTextButton>
        </StyledButton>
      </StyledContainerButton>

      <StyledContainerControl>
        <StyledImageButton>
          <Icon name='add' size={30} color='#FFF' />
        </StyledImageButton>

        <StyledImageButton>
          <Icon name='remove' size={30} color='#FFF' />
        </StyledImageButton>
      </StyledContainerControl>
    </StyledBackground>
  );
}
