/* eslint-disable prettier/prettier */
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {Order} from '../entities/Order';

export const getOrders = async (userId: string) => {
  const [openOrders, partnerOrders] = await Promise.all([
    findOpenOrders(),
    findPartnerOrders(userId),
  ]);
  return [...openOrders, ...partnerOrders];
};
const findOpenOrders = async () => {
  const ordersDocs = await firestore()
    .collection('orders')
    .where('status', '==', 'CREATED')
    .get();
  return docsToOrders(ordersDocs);
};

const findPartnerOrders = async (userId: string) => {
  const ordersDocs = await firestore()
    .collection('orders')
    .where('partner', '==', userId)
    .get();
  return docsToOrders(ordersDocs);
};

const docsToOrders = (
  ordersDocs: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
): Order[] => {
  const orders: Order[] = [];
  ordersDocs.forEach(doc => {
    const {
      friendlyId,
      minutes,
      meters,
      value,
      partnerValue,
      user,
      createdAt,
      pickupAddress,
      deliveryAddress,
      comments,
      status,
    } = doc.data();
    orders.push({
      id: doc.id,
      friendlyId,
      minutes,
      meters,
      value,
      partnerValue,
      user,
      createdAt,
      pickupAddress,
      deliveryAddress,
      comments,
      status,
    });
  });
  return orders;
};
