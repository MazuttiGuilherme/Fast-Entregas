/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import {Order} from '../../entities/Order';
import {Container} from '../Container';
import {CustomText} from '../CustomText';

type Props = {
  orders: Order[];
  noOrdersMessage: string;
};

export function OrdersList({orders, noOrdersMessage}: Props) {
  return (
    <Container>
      {orders.length > 0 ? (
        <>
          {orders.map(order => (
            <CustomText key={order.id}>{order.friendlyId}</CustomText>
          ))}
        </>
      ) : (
        <CustomText style={styles.noOrder}>{noOrdersMessage}</CustomText>
      )}
      ;
    </Container>
  );
}

const styles = StyleSheet.create({
    noOrder: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 16,
    },
});
