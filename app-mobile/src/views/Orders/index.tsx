/* eslint-disable prettier/prettier */
import {faRectangleList as farRectangleList} from '@fortawesome/free-regular-svg-icons';
import {faRectangleList as fasRectangleList} from '@fortawesome/free-solid-svg-icons';
import {faClock as farClock} from '@fortawesome/free-regular-svg-icons';
import {faClock as fasClock} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck as farCircleCheck} from '@fortawesome/free-regular-svg-icons';
import {faCircleCheck as fasCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import {AcceptedOrdersView} from '../AcceptedOrders';
import {FinishedOrdersView} from '../FinishedOrders';
import {OpenOrdersView} from '../OpenOrders';
import { getOrders } from '../../services/getOrders';
import { selectUser } from '../../store/slices/userSlice';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export function OrdersView() {
  const user = useSelector(selectUser);
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) {
        return;
      }
      const orders = await getOrders(user.id);
      console.log(orders);
    };
    fetchOrders();
  }, [user]);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {
          let icon;
          switch (route.name) {
            case 'OpenOrders':
              icon = focused ? fasRectangleList : farRectangleList;
              break;
            case 'AcceptedOrders':
              icon = focused ? fasClock : farClock;
              break;
            case 'FinishedOrders':
              icon = focused ? fasCircleCheck : farCircleCheck;
              break;
            default:
              return null;
          }
          return <FontAwesomeIcon icon={icon} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#1117A3',
        tabBarInactiveTintColor: '#33333',
        tabBarInactiveBackgroundColor: '#EEEEEE',
        tabBarActiveBackgroundColor: '#EEEEEE',
        tabBarLabelStyle: {
            fontFamily: 'Lato-Regular',
            fontSize: 12,
        },
      })}>
      <Tab.Screen
        name="OpenOrders"
        component={OpenOrdersView}
        options={{
          title: 'Disponíveis',
        }}
      />
      <Tab.Screen
        name="AcceptedOrders"
        component={AcceptedOrdersView}
        options={{
          title: 'Em andamento',
        }}
      />
      <Tab.Screen
        name="FinishedOrders"
        component={FinishedOrdersView}
        options={{
          title: 'Finalizados',
        }}
      />
    </Tab.Navigator>
  );
}
