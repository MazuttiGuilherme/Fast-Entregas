/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeView} from './views/Home';
import {LoginView} from './views/Login';

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{
            headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginView} />
    </Stack.Navigator>
  );
}
