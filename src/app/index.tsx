import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import NetInfo from '@react-native-community/netinfo';
import SplashScreenComponent from '../components/splashScreen/splashScreen'; // Import the SplashScreen component

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Index: React.FC = () => {
  // the state for the splashscreen
  const [splashScreen, setSplashScreen] = useState(true);
  // the state for the main screen
  const [mainScreen, setMainScreen] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        // Load fonts
        await Font.loadAsync({
          // Add your fonts here
          Roboto: require('./assets/fonts/Roboto.ttf'),
        });

        // Load images
        const imageAssets = cacheImages([require('./assets/images/logo.png')]);

        await Promise.all([...imageAssets]);

        // Check internet connection
        const netInfo = await NetInfo.fetch();
        if (!netInfo.isConnected) {
          Alert.alert(
            'No Internet Connection',
            'Please check your internet connection and try again.',
          );
          return;
        }

        // Simulate loading to showcase splash screen
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setSplashScreen(false);
        setMainScreen(true);
        SplashScreen.hideAsync();
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  const cacheImages = (images: any[]) => {
    return images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
  };

  if (splashScreen) {
    return <SplashScreenComponent />;
  }

  if (mainScreen) {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
      </View>
    );
  }

  return null;
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
