import useTheme from '@/theme/useTheme';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import createHomeStyles from './HomeScreen.styles';
import HomeInput from '../components/HomeInput/HomeInput';
import HomeList from '../components/HomeList/HomeList';

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

const styles = StyleSheet.create({});
