//

import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/splashScreen/splashScreen';
import HomeScreen from '../app/HomeScreen/homeScreen';

const Index = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  }, []);

  return <>{isShowSplash ? <SplashScreen /> : <HomeScreen />}</>;
};

export default Index;
