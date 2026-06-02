import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import useTheme from '@/theme/useTheme';
import useTodoStats from '../../hooks/useTodoStats';
import createProgressBarStyles from './ProgressBar.styles';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const ProgressBar = () => {
  const { colors } = useTheme();
  const styles = createProgressBarStyles(colors);

  const {
    total: totalTodosCount,
    completed: completedTodosCount,
    percentage: progressPercentage,
  } = useTodoStats();

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
