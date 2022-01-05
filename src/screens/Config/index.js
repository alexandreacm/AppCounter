import React from 'react';

import {
  StyledBackground,
  StyledTitle,
  StyledButton,
  StyledTextButton,
  StyledContainerButton,
  StyledContainerControl
} from './styles';

export default function Config() {
  return (
    <StyledBackground>
      <StyledTitle>Counters</StyledTitle>

      <StyledContainerButton>
        <StyledButton>
          <StyledTextButton>Add Counter</StyledTextButton>
        </StyledButton>

        <StyledButton>
          <StyledTextButton>Remove Counter</StyledTextButton>
        </StyledButton>
      </StyledContainerButton>

      <StyledContainerControl>
        <StyledButton>
          <StyledTextButton>Add Counter</StyledTextButton>
        </StyledButton>

        <StyledButton>
          <StyledTextButton>Remove Counter</StyledTextButton>
        </StyledButton>
      </StyledContainerControl>
    </StyledBackground>
  );
}
