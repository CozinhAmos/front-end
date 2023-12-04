import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

interface CozinhAmosTextInput {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  placeholder?: string;
}

const CozinhAmosTextInput: React.FC<CozinhAmosTextInput> = ({
  label,
  value,
  onChangeText,
  error,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      {error && <HelperText type="error">{error}</HelperText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 6,
    
  },
input:{
  backgroundColor: "transparent",
  borderColor: "green",
  borderWidth: 1,
}

});

export default CozinhAmosTextInput;
