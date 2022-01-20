import styled from 'styled-components/native';
import colors from '@/theme/colors';
import Lottie from 'lottie-react-native';

const StyledBackground = styled.View`
  flex: 1;
  background-color: ${colors.BG};
`;

const StyledEmptyListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledLottie = styled(Lottie)`
  height: 200px;
  width: 200px;
  align-self: center;
`;

const StyledEmptyTitle = styled.Text`
  color: ${colors.COLOR_WHITE};
  font-size: 20px;
  text-align: center;
`;

const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 10
  }
})``;

export {
  StyledBackground,
  StyledEmptyListContainer,
  StyledLottie,
  StyledEmptyTitle,
  StyledFlatList
};
