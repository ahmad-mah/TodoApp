import useTheme from '@/theme/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import createProgressBarStyles from './ProgressBar.styles';

const ProgressBar = () => {
  const { colors } = useTheme();
  const styles = createProgressBarStyles(colors);
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBar}>
        <LinearGradient
          colors={colors.gradients.success}
          style={{ ...styles.progressFill, width: '60%' }}
        ></LinearGradient>
      </View>

      <Text style={styles.progressText}>50%</Text>
    </View>
  );
};

export default ProgressBar;
