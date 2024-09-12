import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';

interface ButtonProps {
  text: string | number;
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({ text, onPress, disabled, style, textStyle }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, style, disabled && styles.disabledButton]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text
          style={[
            styles.buttonText,
            textStyle,
            disabled && styles.disabledButtonText,
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: 290,
    height: 54,
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#D3D3D3',
  },
});
