import AppButton from '@/shared/components/AppButton';
import { ThemeMode } from '@/theme/mode';
import useTheme from '@/theme/useTheme';
import { StyleSheet, Text, View } from 'react-native';
import HomeHeader from './components/HomeHeader';
import useHomeData from './hooks/useHomeData';
import { getHomeText } from './services/homeService';

const HomeScreen = () => {
  const { colors, setTheme } = useTheme();
  const { loading } = useHomeData();
  const title = getHomeText();

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <HomeHeader />
      <Text style={[styles.title, { color: colors.text }]}>{loading ? 'Loading…' : title}</Text>
      <Text style={[styles.subtitle, { color: colors.textMuted }]}>
        Use the buttons below to switch the theme.
      </Text>

      <AppButton label="Light theme" onPress={() => setTheme(ThemeMode.LIGHT)} />
      <AppButton label="Dark theme" onPress={() => setTheme(ThemeMode.DARK)} />
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
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    maxWidth: 300,
  },
});

export default HomeScreen;
