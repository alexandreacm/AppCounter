import React from 'react';

import { StyledCardBackground, StyledCounterName, StyledTotal } from './styles';

export default function CardCounter({ data: { name, total } }) {
  return (
    <StyledCardBackground>
      <StyledCounterName>{name}</StyledCounterName>
      <StyledTotal>{total}</StyledTotal>
    </StyledCardBackground>
  );
}
