/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeView} from './views/Home';
import {LoginView} from './views/Login';
import { OrdersView } from './views/Orders';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Orders: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1117A3',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontFamily: 'Lato-Regular',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginView}
        options={{
          title: 'Entrar no sistema',
        }}
      />
      <Stack.Screen
        name="Orders"
        component={OrdersView}
        options={{
          title: 'Pedidos',
        }}
      />
    </Stack.Navigator>
  );
}
