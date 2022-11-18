import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export enum StorageKey {
  ACCESS_TOKEN = 'access_Token',
}

export const storeData = async (
  key: StorageKey,
  value: string,
  callback?: () => void,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
    if (callback) {
      callback();
    }
  } catch (e) {
    Alert.alert('Error', 'Could not store data');
  }
};

export const getData = async (
  key: StorageKey,
): Promise<string | null | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    Alert.alert('Error', 'Could not retrieve data');
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log(await getData(StorageKey.ACCESS_TOKEN));
  } catch (e) {}
};
