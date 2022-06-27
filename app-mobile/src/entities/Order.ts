/* eslint-disable prettier/prettier */
import { Address } from './Address';
import { OrderStatus } from './OrderStatus';

export type Order = {
  id: string;
  minutes: number;
  meters: number;
  value: number;
  pickupAddress: Address;
  deliveryAddress: Address;
  comments: string;
  user: string;
  friendlyId: string;
  partnerValue: number;
  status: OrderStatus;
  createdAt: Date;
};
