import styled from 'styled-components/native';
import colors from '@/theme/colors';

const StyledCardBackground = styled.View`
  flex: 1;
  height: 160px;
  background-color: ${colors.CARD_SELECTED};
  margin-bottom: 30px;
  border-radius: 6px;
  padding: 15px;
  border-width: 3px;
  border-color: #808080;
  elevation: 10;
  box-shadow: 0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW};
`;

const StyledCounterName = styled.Text`
  color: #808080;
  font-size: 25px;
  text-align: left;
`;

const StyledTotal = styled.Text`
  font-size: 55px;
  font-weight: bold;
  text-align: right;
`;

export { StyledCardBackground, StyledCounterName, StyledTotal };
