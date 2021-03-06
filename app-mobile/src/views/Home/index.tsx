/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import bg from '../../assets/img/bg-fast-entregas-mobile.jpg';
import Logo from '../../assets/img/logo-fast-entregas-white.svg';
import {CustomButton} from '../../components/CustomButton';
import {CustomText} from '../../components/CustomText';
import { RootStackParamList } from '../../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeView({navigation}: Props) {
  const handlePressLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.view}>
        <Logo width={266} height={70} />
        <CustomText bold style={styles.title}>
          Faça login e escolha os pedidos que quer entregar.
        </CustomText>
        <CustomButton variant="success" size="lg" onPress={handlePressLogin}>
          Fazer login
        </CustomButton>
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
  title: {
    fontSize: 36,
    textAlign: 'center',
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
});
