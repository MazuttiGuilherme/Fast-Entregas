/* eslint-disable prettier/prettier */
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
export function isNativeFirebaseAuthError(
  obj: unknown,
): obj is FirebaseAuthTypes.NativeFirebaseAuthError {
  return typeof obj === 'object' && obj !== null && 'code' in obj;
}
