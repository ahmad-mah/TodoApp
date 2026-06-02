import useTheme from '@/theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Id } from '../../../../../convex/_generated/dataModel';
import { useDeleteTodo, useToggleTodo, useUpdateTodo } from '../../api/useTodos';
import createHomeListStyles from './HomeList.styles';
import HomeListItemButton from './HomeListItemButton';
import HomeListItemIcon from './HomeListItemIcon';

const HomeListItem = ({
  item,
}: {
  item: { text: string; isCompleted: boolean; _id: Id<'todos'> };
}) => {
  const { colors } = useTheme();
  const styles = createHomeListStyles(colors);

  const toggleTodo = useToggleTodo();
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  const handleDelete = () => {
    Alert.alert('Delete Todo', 'Are you sure you want to delete this todo?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => deleteTodo({ id: item._id }),
      },
    ]);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={colors.gradients.surface}
      style={styles.listItem}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.listItemCheck}
        onPress={() => toggleTodo({ id: item._id })}
      >
        {item.isCompleted && (
          <LinearGradient colors={colors.gradients.success} style={styles.listItemCheckFilled}>
            <Ionicons name="checkmark-outline" style={styles.listItemCheckIcon} />
          </LinearGradient>
        )}
      </TouchableOpacity>
      {isEditing ? (
        <View style={styles.listItemEditContent}>
          <TextInput
            value={editText}
            onChangeText={setEditText}
            placeholder="Edit todo"
            style={styles.listItemEditTextInput}
            placeholderTextColor={colors.text}
          />
          <View style={styles.listItemEditContentAction}>
            <HomeListItemButton
              text="Save"
              color={colors.gradients.success}
              iconName="checkmark-outline"
              onPress={() => {
                updateTodo({ id: item._id, text: editText });
                setIsEditing(false);
              }}
            />
            <HomeListItemButton
              text="Cancel"
              color={colors.gradients.muted}
              iconName="close-outline"
              onPress={() => setIsEditing(false)}
            />
          </View>
        </View>
      ) : (
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
            <HomeListItemIcon
              iconName="pencil-outline"
              color={colors.warning}
              onPress={() => {
                setEditText(item.text);
                setIsEditing(true);
              }}
            />
            <HomeListItemIcon
              iconName="trash-outline"
              color={colors.danger}
              onPress={handleDelete}
            />
          </View>
        </View>
      )}
    </LinearGradient>
  );
};

export default HomeListItem;
