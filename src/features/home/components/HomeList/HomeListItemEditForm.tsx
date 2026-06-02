import { TextInput, View } from 'react-native';
import HomeListItemButton from './HomeListItemButton';

type Props = {
  editText: string;
  onChangeText: (t: string) => void;
  onSave: () => void;
  onCancel: () => void;
  colors: any;
  styles: any;
};

export default function HomeListItemEditForm({
  editText,
  onChangeText,
  onSave,
  onCancel,
  colors,
  styles,
}: Props) {
  return (
    <View style={styles.listItemEditContent}>
      <TextInput
        value={editText}
        onChangeText={onChangeText}
        placeholder="Edit todo"
        style={styles.listItemEditTextInput}
        placeholderTextColor={colors.text}
      />
      <View style={styles.listItemEditContentAction}>
        <HomeListItemButton
          text="Save"
          color={colors.gradients.success}
          iconName="checkmark-outline"
          onPress={onSave}
        />
        <HomeListItemButton
          text="Cancel"
          color={colors.gradients.muted}
          iconName="close-outline"
          onPress={onCancel}
        />
      </View>
    </View>
  );
}
