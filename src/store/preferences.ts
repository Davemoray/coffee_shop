import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async (key: string, value: Object) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (e) {
    console.log(`An error occurred while trying to save data${e}`);
  }
};

export const loadData = async (key: string) => {
  try {
    const stringValue = await AsyncStorage.getItem(key);
    if (stringValue) {
      return JSON.parse(stringValue);
    } else {
      return null;
    }
  } catch (error) {
    console.log(`An error occurred while trying to fetch data${error}`);
  }
};

export const setFave = async (key: string, value: Object) => {
  await setData(key, value);
};

export const loadFave = async (value) => {
  await loadData(value);
};
