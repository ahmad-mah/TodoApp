import useTheme from '@/theme/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Alert } from 'react-native';
import useEditMode from '../../hooks/useEditMode';
import useTodoMutations from '../../hooks/useTodoMutations';
import { TodoItem } from '../../types';
import createHomeListStyles from './HomeList.styles';
import HomeListItemDisplay from './HomeListItemDisplay';
import HomeListItemEditForm from './HomeListItemEditForm';

const HomeListItem = ({ item }: { item: TodoItem }) => {
  const { colors } = useTheme();
  const styles = createHomeListStyles(colors);

  const { toggleTodo, updateTodo, deleteTodo } = useTodoMutations();

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
  const { isEditing, editText, setEditText, startEdit, cancelEdit, finishEdit } = useEditMode(
    item.text
  );

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={colors.gradients.surface}
      style={styles.listItem}
    >
      {isEditing ? (
        <HomeListItemEditForm
          editText={editText}
          onChangeText={setEditText}
          onSave={() => {
            updateTodo({ id: item._id, text: editText });
            finishEdit();
          }}
          onCancel={cancelEdit}
          colors={colors}
          styles={styles}
        />
      ) : (
        <>
          <HomeListItemDisplay
            item={item}
            colors={colors}
            styles={styles}
            onToggle={() => toggleTodo({ id: item._id })}
            onEdit={() => startEdit(item.text)}
            onDelete={handleDelete}
          />
        </>
      )}
    </LinearGradient>
  );
};

export default React.memo(
  HomeListItem,
  (prev, next) =>
    prev.item._id === next.item._id &&
    prev.item.text === next.item.text &&
    prev.item.isCompleted === next.item.isCompleted
);
