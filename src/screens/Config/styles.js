import styled from 'styled-components/native';
import colors from '@/theme/colors';

const StyledBackground = styled.View`
  flex: 1;
  background-color: ${colors.BG};
  padding: 16px;
`;

const StyledTitle = styled.Text`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

const StyledButton = styled.TouchableOpacity`
  width: 50%;
  height: 60px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.CARD_SELECTED};
`;

const StyledTextButton = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.BUTTON_TEXT};
`;

const StyledContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StyledContainerControl = styled.View`
  width: 100%;
  height: 170px;
  padding: 25px;
  top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${colors.COLOR_WHITE};
  border-style: dotted;
  margin-bottom: 10px;
`;

export {
  StyledBackground,
  StyledTitle,
  StyledButton,
  StyledTextButton,
  StyledContainerButton,
  StyledContainerControl
};
