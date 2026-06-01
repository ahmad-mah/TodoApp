import useTheme from '@/theme/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import createProgressBarStyles from './ProgressBar.styles';
import { useCompletedTodos, useTodos } from '../../api/useTodos';

const ProgressBar = () => {
  const { colors } = useTheme();
  const styles = createProgressBarStyles(colors);

  const completedTodosCount = useCompletedTodos()?.length ?? 0;
  const getTodoCount = useTodos()?.length ?? 0;

  const progressPercentage = getTodoCount > 0 ? (completedTodosCount / getTodoCount) * 100 : 0;

  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBar}>
        <LinearGradient
          colors={colors.gradients.success}
          style={{ ...styles.progressFill, width: `${progressPercentage}%` }}
        ></LinearGradient>
      </View>

      <Text style={styles.progressText}>{Math.round(progressPercentage)}%</Text>
    </View>
  );
};

export default ProgressBar;
