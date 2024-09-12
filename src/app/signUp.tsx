import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';

interface Error {
  email: string;
  password: string;
  retypePassword: string;
  contact: string;
}

interface HandleData {
  name: string;
  value: any;
}

const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    retypePassword: '',
    contact: '',
  });

  const handleData = ({ name, value }: HandleData) => {
    setFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState<Error>({
    email: '',
    password: '',
    retypePassword: '',
    contact: '',
  });

  const handleSubmit = () => {
    let valid = true;
    let newErrors: Error = {
      email: '',
      password: '',
      retypePassword: '',
      contact: '',
    };

    const passwordRegexHandler = (): boolean => {
      //this part of the functon handles the password and authenticates correctly
      const password = formData.password;
      const regex = {
        lowercase: /(?=.*[a-z])/,
        uppercase: /(?=.*[A-Z])/,
        number: /(?=.*[0-9])/,
        special: /(?=.*[#?!@$%^&*-])/,
      };

      if (!regex.lowercase.test(password) || !regex.uppercase.test(password)) {
        newErrors.password =
          'You are missing an upper case or lower case letter';
        valid = false;
      } else if (!regex.number.test(password)) {
        newErrors.password = 'Please include at least one number';
        valid = false;
      } else if (!regex.special.test(password)) {
        newErrors.password = 'Please include at least one special character';
        valid = false;
      }

      return valid;
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
    } else if (formData.password.length <= 8) {
      newErrors.password = 'Your password should be 8 or more characters';
      valid = false;
    } else if (!passwordRegexHandler()) {
      valid = false;
    }

    if (formData.retypePassword !== formData.password) {
      newErrors.retypePassword = 'Passwords do not match';
      valid = false;
    }

    setError(newErrors);

    if (valid) {
      console.log('Form submitted');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.textView}>
          <Text style={styles.mainText}>COOL CHOP</Text>
          <Text style={styles.subText}>Signup to your account</Text>
        </View>

        <TextInput
          style={styles.inputText}
          placeholder="Email"
          value={formData.email}
          onChangeText={(value) => handleData({ name: 'email', value })}
        />
        <Text style={styles.errorText}>{error.email}</Text>

        <TextInput
          style={styles.inputText}
          placeholder="Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(value) => handleData({ name: 'password', value })}
        />
        <Text style={styles.errorText}>{error.password}</Text>

        <TextInput
          style={styles.inputText}
          placeholder="Retype Password"
          secureTextEntry
          value={formData.retypePassword}
          onChangeText={(value) =>
            handleData({ name: 'retypePassword', value })
          }
        />
        <Text style={styles.errorText}>{error.retypePassword}</Text>

        <TextInput
          style={styles.inputText}
          placeholder="Contact"
          value={formData.contact}
          onChangeText={(value) => handleData({ name: 'contact', value })}
        />
        <Text style={styles.errorText}>{error.contact}</Text>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or sign up with</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default GetStarted;

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
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20, // added margin for spacing
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
    marginTop: 20, // added margin for spacing
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
  orText: {
    color: '#8A8989',
    fontSize: 16,
    marginVertical: 20, // added margin for spacing
  },
});
