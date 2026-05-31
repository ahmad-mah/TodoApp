import BubbleIcon from '@/shared/components/ui/BubbleIcon';
import useTheme from '@/theme/useTheme';
import { Text, View } from 'react-native';
import createHomeHeaderStyles from './HomeHeader.styles';

const HomeHeader = () => {
  const { colors } = useTheme();
  const styles = createHomeHeaderStyles(colors);
  return (
    <View style={styles.headerContainer}>
      <BubbleIcon name="flash-outline" />

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitle}>Today's Tasks 👀</Text>
        <Text style={styles.headerSubtitle}>2 of 4 completed</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
