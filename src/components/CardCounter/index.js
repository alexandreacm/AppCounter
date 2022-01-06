import React from 'react';
import { useDispatch } from 'react-redux';

import { selectCounter } from '@/store/slices/counterSlice';

import { StyledViewBackground, StyledCounterName, StyledTotal } from './styles';

export default function CardCounter({ data: { id, name, total, selected } }) {
  const dispatch = useDispatch();

  return (
    <StyledViewBackground
      selected={selected}
      onPress={() => {
        dispatch(selectCounter({ id }));
      }}
    >
      <StyledCounterName>{name}</StyledCounterName>
      <StyledTotal>{total}</StyledTotal>
    </StyledViewBackground>
  );
}
