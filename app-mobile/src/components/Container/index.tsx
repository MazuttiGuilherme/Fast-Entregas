/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: React.ReactNode;
  padding?: boolean;
  center?: boolean;
};

export function Container({children, padding = false, center = false}: Props) {
  return (
    <View style={[styles.container, padding ? styles.padding : {}, center ? styles.center : {}]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  padding: {
    padding: 16,
  },
  center: {
    justifyContent: 'center',
  },
});
