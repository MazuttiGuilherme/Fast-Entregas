/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { Routes } from './routes';
import Toast from 'react-native-toast-message';


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <Toast />
    </NavigationContainer>
  );
}
