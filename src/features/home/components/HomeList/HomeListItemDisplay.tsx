import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import { TodoItem } from '../../types';
import HomeListItemIcon from './HomeListItemIcon';

type Props = {
  item: TodoItem;
  colors: any;
  styles: any;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function HomeListItemDisplay({
  item,
  colors,
  styles,
  onToggle,
  onEdit,
  onDelete,
}: Props) {
  return (
    <>
      <TouchableOpacity activeOpacity={0.7} style={styles.listItemCheck} onPress={onToggle}>
        {item.isCompleted && (
          <LinearGradient colors={colors.gradients.success} style={styles.listItemCheckFilled}>
            <Ionicons name="checkmark-outline" style={styles.listItemCheckIcon} />
          </LinearGradient>
        )}
      </TouchableOpacity>

      <View style={styles.listItemContent}>
        <Text
          style={{
            ...styles.listItemText,
            textDecorationLine: item.isCompleted ? 'line-through' : 'none',
            color: item.isCompleted ? colors.textMuted : colors.text,
          }}
        >
          {item.text}
        </Text>

        <View style={styles.listItemContentAction}>
          <HomeListItemIcon iconName="pencil-outline" color={colors.warning} onPress={onEdit} />
          <HomeListItemIcon iconName="trash-outline" color={colors.danger} onPress={onDelete} />
        </View>
      </View>
    </>
  );
}
