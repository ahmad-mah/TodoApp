import BubbleIcon from '@/shared/components/ui/BubbleIcon';
import useTheme from '@/theme/useTheme';
import { Text, View } from 'react-native';
import createHomeHeaderStyles from './HomeHeader.styles';
import { useAddTodo, useCompletedTodos, useTodos } from '../../api/useTodos';
import { getTodos } from '../../../../../convex/todos';

const HomeHeader = () => {
  const { colors } = useTheme();
  const styles = createHomeHeaderStyles(colors);

  const completedTodosCount = useCompletedTodos()?.length ?? 0;
  const getTodoCount = useTodos()?.length ?? 0;
  
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
