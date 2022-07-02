/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomText} from '../CustomText';

type Props = {
  children: React.ReactNode;
};

export function CustomAlert({children}: Props) {
  return (
    <View style={styles.wrap}>
      <CustomText>{children}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#F8d7da',
    borderWidth: 1,
    borderColor: '#f5c6cb',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  text: {
    color: '#721c24',
    fontSize: 16,
  },
});
