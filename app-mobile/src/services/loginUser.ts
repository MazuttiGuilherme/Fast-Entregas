/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import {User} from '../entities/User';
import {getUser} from './getUser';

type CredentialsInput = {
  email: string;
  password: string;
};

export const loginUser = async ({
  email,
  password,
}: CredentialsInput): Promise<User> => {
  const result = await auth().signInWithEmailAndPassword(email, password);
  return getUser(result.user.uid);
};
