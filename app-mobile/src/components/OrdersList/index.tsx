/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { LoadingStatus } from '../../entities/LoadingStatus';
import {Order} from '../../entities/Order';
import { selectLoadOrderInfo } from '../../store/slices/ordersSlice';
import {Container} from '../Container';
import { CustomAlert } from '../CustomAlert';
import {CustomText} from '../CustomText';
import { Loading } from '../Loading';

type Props = {
  orders: Order[];
  noOrdersMessage: string;
};

export function OrdersList({orders, noOrdersMessage}: Props) {
  const { status } = useSelector(selectLoadOrderInfo);
  if (status === LoadingStatus.loading){
    return <Loading />;
  }
  if (status === LoadingStatus.failed) {
    return (
      <Container padding>
        <CustomAlert>Falha ao bsucar pedidos.</CustomAlert>
      </Container>
    );
  }
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
      )};
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
