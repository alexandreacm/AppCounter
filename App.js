import React, {useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="#0e1122" barStyle="light-content" />
      <Text>App</Text>
    </View>
  );
}
