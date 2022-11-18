import {clearAllData, getData, StorageKey} from './storage.util';

export const isAuthenticated = async () => {
  return !!(await getData(StorageKey.ACCESS_TOKEN));
};

export const logout = () => {
  clearAllData();
};
