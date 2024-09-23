import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Button from '../components/shared/button';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.mainText]}>
          Get all your favorite food at your doorstep.
        </Text>
        <Text style={styles.subText}>
          You just need to make an order of the food you want from your favorite
          vendor.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/getStarted" asChild>
          <Button
            text="Get Started"
            style={styles.getStartedButton}
            textStyle={styles.getStartedButtonText}
          />
        </Link>
        <Link href="/login" asChild>
          <Button
            text="Login"
            style={styles.loginButton}
            textStyle={styles.loginButtonText}
          />
        </Link>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 150,
  },
  textContainer: {
    paddingHorizontal: 24,
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Myanmar',
  },
  mainText: {
    color: '#DC2C10',
    width: 250,
    height: 100,
    fontSize: 27,
    fontWeight: 'bold',
  },
  subText: {
    color: '#8A8989',
    fontSize: 19,
    textAlign: 'center',
    width: 250,
    height: 78,
  },
  buttonContainer: {
    paddingBottom: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  getStartedButton: {
    backgroundColor: '#DC2C10',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderColor: '#DC2C10',
    borderWidth: 1,
    width: 279,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    width: 279,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});
