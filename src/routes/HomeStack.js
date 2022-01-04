import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@/routes/BottomTab';

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
