import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Link, router, useRouter } from 'expo-router';

interface DataHandle {
  name: keyof FormData;
  value: string;
}

interface FormData {
  email: string;
  password: string;
  contact: string;
}

interface Error {
  email: string;
  password: string;
  contact: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    contact: '',
  });

  const [error, setError] = useState<Error>({
    email: '',
    password: '',
    contact: '',
  });

  const handleData = ({ name, value }: DataHandle) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (error[name]) {
      clearErrors();
    }
  };

  const clearErrors = () => {
    setError({
      email: '',
      password: '',
      contact: '',
    });
  };

  const handleSubmit = () => {
    let valid = true;
    let newErrors: Error = {
      email: '',
      password: '',
      contact: '',
    };

    if (!formData.email) {
      newErrors.email = 'Please enter a valid email.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Your email is invalid.';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Please enter a valid password.';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Your password should be 8 or more characters.';
      valid = false;
    }

    if (!formData.contact) {
      newErrors.contact = 'Please enter your contact.';
      valid = false;
    }

    setError(newErrors);

    if (valid) {
      console.log('Form submitted');

      router.push('./location');
      // Perform any further actions such as API call, navigation, etc.
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.textView}>
          <Text style={styles.mainText}>COOL CHOP</Text>
          <Text style={styles.subText}>Login into your account</Text>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleData({ name: 'email', value })}
          />
          {error.email ? (
            <Text style={styles.errorText}>{error.email}</Text>
          ) : null}

          <TextInput
            style={styles.inputText}
            placeholder="Password"
            secureTextEntry
            value={formData.password}
            onChangeText={(value) => handleData({ name: 'password', value })}
          />
          {error.password ? (
            <Text style={styles.errorText}>{error.password}</Text>
          ) : null}

          <TextInput
            style={styles.inputText}
            placeholder="Contact"
            value={formData.contact}
            onChangeText={(value) => handleData({ name: 'contact', value })}
          />
          {error.contact ? (
            <Text style={styles.errorText}>{error.contact}</Text>
          ) : null}
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.footerText}>
          <Text style={{ color: '#8A8989' }}>
            Forgot Password?
            <Text style={{ color: '#DC2C10', textDecorationLine: 'underline' }}>
              {' '}
              Reset
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 180,
  },
  textView: {
    width: 268,
    height: 133,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainText: {
    width: 255,
    height: 50,
    color: '#DC2C10',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 37,
  },
  subText: {
    width: 261,
    height: 40,
    textAlign: 'center',
    color: '#8A8989',
    fontSize: 19,
  },
  inputView: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
  inputText: {
    height: 43,
    borderColor: '#8A8989',
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 30,
    marginVertical: 5,
    width: 267,
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#DC2C10',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 279,
    height: 54,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 60,
  },
  submitButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'regular',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    marginTop: 10,
  },
});
