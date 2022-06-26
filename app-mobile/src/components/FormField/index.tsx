/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {CustomText} from '../CustomText';

type Props = {
  label: string;
  error?: string;
  isInvalid?: boolean;
  isValid?: boolean;
} & TextInputProps;

export function FormField({
  label,
  error,
  isInvalid = false,
  isValid = false,
  ...otherProps
}: Props) {
  return (
    <View style={styles.wrap}>
      <CustomText style={styles.label}>{label}</CustomText>
      <TextInput
        style={[
          styles.input,
          isInvalid ? styles.invalidField : {},
          isValid ? styles.validField : {},
        ]}
        {...otherProps}
      />
      {isInvalid && error && (
        <CustomText style={styles.errorText}>{error}</CustomText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 16,
  },
  label: {
    color: '#333',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: '#CED4DA',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  invalidField: {
    borderColor: '#dc3545',
  },
  validField: {
    borderColor: '#198754',
  },
  errorText: {
    color: '#dc3545',
    marginTop: 5,
  },
});
