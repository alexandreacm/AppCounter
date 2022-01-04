import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import BottomTab from '@/routes/BottomTab';

const Route = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <BottomTab />;
};

export default Route;
