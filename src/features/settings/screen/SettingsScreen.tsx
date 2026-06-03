import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsHeader from '../components/SettingsHeader';
import SettingsStats from '../components/SettingsStats';
import SettingsPreferences from '../components/SettingsPreferences';
import SettingsDanger from '../components/SettingsDanger';

const SettingsScreen = () => {

 

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <SettingsHeader />
        <SettingsStats />
        <SettingsPreferences />
        <SettingsDanger />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    gap: 30,
    paddingVertical: 20,
  },
});

export default SettingsScreen;
