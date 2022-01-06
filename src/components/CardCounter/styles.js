import styled from 'styled-components/native';
import colors from '@/theme/colors';

const StyledViewBackground = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  padding: 10px;
  background-color: ${({ selected }) =>
    selected ? colors.CARD_SELECTED : colors.CARD_UNSELECTED};
  border-radius: 6px;
  border-width: 3px;
  border-color: #808080;
  elevation: 10;
  box-shadow: 0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW};
  margin-bottom: 20px;
`;

const StyledCounterName = styled.Text`
  color: ${colors.TEXT_SELECTED};
  font-size: 25px;
  text-align: left;
`;

const StyledTotal = styled.Text`
  font-size: 55px;
  font-weight: bold;
  text-align: right;
`;

export { StyledViewBackground, StyledCounterName, StyledTotal };
