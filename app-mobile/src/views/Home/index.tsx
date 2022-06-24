/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import bg from '../../assets/img/bg-fast-entregas-mobile.jpg';

export function HomeView() {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.view}>
        <Text>Logo</Text>
        <Text>Faça login e escolha os pedidos que quer entregar.</Text>
        <Text>Fazer login</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    flex: 1,
  },
});
