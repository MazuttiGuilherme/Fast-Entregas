/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';

export const logoutUser = async () => {
    await auth().signOut();
};