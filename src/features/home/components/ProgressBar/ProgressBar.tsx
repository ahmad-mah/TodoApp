import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import useTheme from '@/theme/useTheme';
import createProgressBarStyles from './ProgressBar.styles';
import { useCompletedTodos, useTodos } from '../../api/useTodos';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const ProgressBar = () => {
  const { colors } = useTheme();
  const styles = createProgressBarStyles(colors);

  const todos = useTodos();

  const totalTodosCount = todos?.length ?? 0;

  const completedTodosCount = useCompletedTodos()?.length ?? 0;

  const progressPercentage =
    totalTodosCount > 0 ? (completedTodosCount / totalTodosCount) * 100 : 0;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(progressPercentage, {
      duration: 500,
      easing: Easing.in(Easing.elastic(0.5)),
    });
  }, [progressPercentage]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBar}>
        <AnimatedLinearGradient
          colors={colors.gradients.success}
          style={[styles.progressFill, animatedStyle]}
        />
      </View>

      <Text style={styles.progressText}>{Math.round(progressPercentage)}%</Text>
    </View>
  );
};

export default ProgressBar;
