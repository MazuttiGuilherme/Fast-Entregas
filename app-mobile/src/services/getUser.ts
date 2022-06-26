/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';
import {User} from '../entities/User';

export const getUser = async (userId: string): Promise<User> => {
  const userSnapshot = await firestore().collection('users').doc(userId).get();
  const userData = userSnapshot.data();
  if (!userSnapshot.exists || !userData) {
    throw new Error('User not found.');
  }
  const {name, email, phone} = userData;
  return {
    id: userId,
    name,
    email,
    phone,
  };
};
