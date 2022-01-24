import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@/routes/BottomTab';

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Navigator>
      <Screen name='Home' component={HomeScreen} />
    </Navigator>
  );
}
