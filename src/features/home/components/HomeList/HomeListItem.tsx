import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import createHomeListStyles from './HomeList.styles';
import useTheme from '@/theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import HomeListItemIcon from './HomeListItemIcon';

const HomeListItem = ({ text }: { text: string }) => {
  const { colors } = useTheme();
  const styles = createHomeListStyles(colors);

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={colors.gradients.surface}
      style={styles.listItem}
    >
      <TouchableOpacity activeOpacity={0.7} style={styles.listItemCheck}>
        <LinearGradient colors={colors.gradients.success} style={styles.listItemCheckFilled}>
          <Ionicons name="checkmark-outline" style={styles.listItemCheckIcon} />
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.listItemContent}>
        <Text style={styles.listItemText}>{text}</Text>
        <View style={styles.listItemContentAction}>
          <HomeListItemIcon iconName="pencil-outline" color={colors.warning} />
          <HomeListItemIcon iconName="trash-outline" color={colors.danger} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeListItem;
