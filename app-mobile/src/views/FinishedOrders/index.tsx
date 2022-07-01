/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector } from 'react-redux';
import { OrdersList } from '../../components/OrdersList';
import { selectFinishedOrders } from '../../store/slices/ordersSlice';

export function FinishedOrdersView() {
  const finishedOrders = useSelector(selectFinishedOrders);
  return (<OrdersList orders={finishedOrders} noOrdersMessage="Nenhum pedido finalizado encontrado." />
  );
}
