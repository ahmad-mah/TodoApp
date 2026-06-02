import useTheme from '@/theme/useTheme';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import HomeInput from '../components/HomeInput/HomeInput';
import HomeList from '../components/HomeList/HomeList';
import { ColorScheme } from '@/theme/types';

const HomeScreen = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <HomeHeader />
      <ProgressBar />
      <HomeInput />
      <HomeList />
    </SafeAreaView>
  );
};

export default HomeScreen;

const createHomeStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 20,
      alignItems: 'stretch',
    },
  });
