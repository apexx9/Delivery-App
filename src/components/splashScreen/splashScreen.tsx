import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SplashScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Splash Screen</Text>
  </View>
);

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
