import BubbleIcon from '@/shared/components/BubbleIcon';
import useTheme from '@/theme/useTheme';
import { Text, View } from 'react-native';
import useTodoStats from '../../hooks/useTodoStats';
import createHomeHeaderStyles from './HomeHeader.styles';

const HomeHeader = () => {
  const { colors } = useTheme();
  const styles = createHomeHeaderStyles(colors);

  const { completed, total } = useTodoStats();
  const completedTodosCount = completed;
  const getTodoCount = total;

  return (
    <View style={styles.headerContainer}>
      <BubbleIcon name="flash-outline" />

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitle}>Today's Tasks 👀</Text>
        <Text style={styles.headerSubtitle}>
          {getTodoCount > 0
            ? `${completedTodosCount} of ${getTodoCount} completed`
            : 'Start adding some tasks!'}
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
