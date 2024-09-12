import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  TextStyle,
} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  style?: TextStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  style,
  inputStyle,
  labelStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ?? false} // Ensure secureTextEntry defaults to false if not provided
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default Input;
