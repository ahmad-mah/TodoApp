import AppButton from '@/shared/components/AppButton';
import useTheme from '@/theme/useTheme';
import { StyleSheet, Text, View } from 'react-native';
import SettingsInfo from './components/SettingsInfo';
import useSettingsState from './hooks/useSettingsState';
import { getSettingsDescription } from './services/settingsService';

const SettingsScreen = () => {
  const { colors } = useTheme();
  const { notificationsEnabled, toggleNotifications } = useSettingsState();

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      <SettingsInfo />
      <Text style={[styles.description, { color: colors.textMuted }]}>
        {getSettingsDescription()}
      </Text>
      <AppButton
        label={`Notifications ${notificationsEnabled ? 'On' : 'Off'}`}
        onPress={toggleNotifications}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 320,
    lineHeight: 22,
  },
});

export default SettingsScreen;
