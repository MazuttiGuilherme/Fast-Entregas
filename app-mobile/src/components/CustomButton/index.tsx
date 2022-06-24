/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {CustomText} from '../../components/CustomText';

type Props = TouchableOpacityProps & {
  variant?: 'primary' | 'success';
  size?: 'md' | 'lg';
  block?: boolean;
  loading?: boolean;
};

export function CustomButton({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  loading = false,
  disabled = false,
  ...otherProps
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        block ? styles.block : {},
        styles[variant],
        styles[size],
        disabled ? styles[`disabled${variant}`] : {},
      ]}
      {...otherProps}>
      {loading && <ActivityIndicator color="#FFF" style={styles.loading}/>}
      <CustomText style={[styles.textBase, styles[`text${size}`]]}>
        {children}
      </CustomText>
      <CustomButton variant="success" size="lg">
        Fazer login
      </CustomButton>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textBase: {
    color: '#FFF',
  },
  primary: {
    backgroundColor: '#1117A3',
  },
  disabledprimary: {
    backgroundColor: '#007bff',
  },
  success: {
    backgroundColor: '#198754',
  },
  disabledsuccess: {
    backgroundColor: '#75c687',
  },
  md: {
    paddingHorizontal: 50,
    paddingVertical: 9,
  },
  textmd: {
    fontSize: 16,
    lineHeight: 20,
  },
  lg: {
    paddingHorizontal: 90,
    paddingVertical: 13,
  },
  textlg: {
    fontSize: 18,
    lineHeight: 22,
  },
  block: {
    width: '100%',
  },
  loading: {
    marginRight: 10,
  },
});
