import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsHeader from '../components/SettingsHeader';
import SettingsStats from '../components/SettingsStats';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <SettingsHeader />
      <SettingsStats />
      {/* <SettingsPreferences />
      <SettingsDanger /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default SettingsScreen;
