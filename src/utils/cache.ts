import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToCache = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Cache save error:', e);
  }
};

export const getFromCache = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Cache get error:', e);
    return null;
  }
};

export const removeFromCache = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Cache remove error:', e);
  }
};