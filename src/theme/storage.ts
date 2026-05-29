import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeMode } from './mode';

const KEY = 'themeMode';

const getThemeMode = async (): Promise<ThemeMode | null> => {
  const value = await AsyncStorage.getItem(KEY);
  return value as ThemeMode | null;
};

const setThemeMode = async (mode: ThemeMode) => {
  await AsyncStorage.setItem(KEY, mode);
};

export default { getThemeMode, setThemeMode };
