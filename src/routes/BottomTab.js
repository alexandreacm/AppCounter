import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '@/theme/colors';
import useFontFamily from '@/hooks/useFontFamily';

import Home from '@/screens/Home';
import Config from '@/screens/Config';

const { Navigator, Screen } = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitleStyle: { color: '#FFF' },
          headerStyle: { backgroundColor: colors.PRIMARY },
          tabBarStyle: { backgroundColor: colors.PRIMARY, height: 60 },
          tabBarLabelStyle: { fontSize: 12, fontFamily: useFontFamily(400) },
          tabBarActiveTintColor: colors.ICON_TAB,
          tabBarInactiveTintColor: colors.GRAY
        }}
      >
        <Screen
          name='Home'
          component={Home}
          options={{
            title: 'Counters',
            tabBarIcon: ({ focused }) => (
              <Icon
                name='star'
                size={30}
                color={focused ? colors.ICON_TAB : colors.GRAY}
              />
            )
          }}
        />
        <Screen
          name='Config'
          component={Config}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name='settings'
                size={30}
                color={focused ? colors.ICON_TAB : colors.GRAY}
              />
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
