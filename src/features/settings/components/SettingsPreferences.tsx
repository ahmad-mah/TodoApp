import GradientCard from '@/shared/components/GradientCard';
import SettingsItem from '@/shared/components/SettingsItem';
import { ThemeMode } from '@/theme/mode';
import { ColorScheme } from '@/theme/types';
import useTheme from '@/theme/useTheme';
import { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

const SettingsPreferences = () => {
  const { colors, setTheme } = useTheme();
  const styles = createSettingsPreferencesStyle(colors);

  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(false);
  const [autoSync, setAutoSync] = useState(false);

  const handleDarkMode = () => setTheme(darkMode ? ThemeMode.LIGHT : ThemeMode.DARK);

  const preferences = [
    {
      key: 'darkMode',
      label: 'Dark Mode',
      icon: 'moon',
      color: colors.primary,
      value: darkMode,
      setValue: () => {
        setDarkMode(!darkMode);
        handleDarkMode();
      },
    },
    {
      key: 'notification',
      label: 'Notifications',
      icon: 'notifications',
      color: colors.warning,
      value: notification,
      setValue: setNotification,
    },
    {
      key: 'autoSync',
      label: 'Auto Sync',
      icon: 'sync',
      color: colors.success,
      value: autoSync,
      setValue: setAutoSync,
    },
  ];

  return (
    <GradientCard title="Preferences">
      <View style={styles.container}>
        {preferences.map((item) => (
          <SettingsItem
            key={item.key}
            iconName={item.icon}
            iconBackgroundColor={item.color}
            text={item.label}
            trailingElement={
              <Switch
                style={styles.switch}
                value={item.value}
                onValueChange={item.setValue}
                trackColor={{ false: '#ccc', true: item.color }}
                thumbColor={'#fff'}
              />
            }
          />
        ))}
      </View>
    </GradientCard>
  );
};

const createSettingsPreferencesStyle = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      marginTop: 16,
      gap: 20,
    },
    switch: { transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] },
  });

export default SettingsPreferences;
