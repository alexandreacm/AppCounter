import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import {
  StyledBackground,
  StyledEmptyListContainer,
  StyledLottie,
  StyledEmptyTitle,
  StyledFlatList
} from './styles';

import CardCounter from '@/components/CardCounter';
import counterEmpty from '../../assets/animations/empty-list.json';

export default function Home() {
  const counters = useSelector(({ counters }) => counters.list);

  function renderEmptyList() {
    return (
      <StyledEmptyListContainer>
        <StyledLottie source={counterEmpty} autoPlay loop />
        <StyledEmptyTitle>Counter List is empty</StyledEmptyTitle>
      </StyledEmptyListContainer>
    );
  }

  return (
    <StyledBackground>
      <StyledFlatList
        style={{ marginTop: 15, marginBottom: 5 }}
        data={counters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CardCounter data={item} />}
        ListEmptyComponent={renderEmptyList}
      />
    </StyledBackground>
  );
}
