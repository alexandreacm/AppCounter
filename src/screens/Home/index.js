import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { StyledBackground } from './styles';

import CardCounter from '@/components/CardCounter';

export default function Home() {
  const [counters, setCounters] = useState([
    {
      id: 1,
      name: 'Counter 1',
      total: '0008'
    },
    {
      id: 2,
      name: 'Counter 2',
      total: '0009'
    },
    {
      id: 3,
      name: 'Counter 3',
      total: '0010'
    },
    {
      id: 4,
      name: 'Counter 5',
      total: '0010'
    },
    {
      id: 5,
      name: 'Counter 5',
      total: '0010'
    }
  ]);

  return (
    <StyledBackground>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16, marginTop: 25 }}
        data={counters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CardCounter data={item} />}
      />
    </StyledBackground>
  );
}
