import { isEmpty } from '@/shared/utils/validation';
import useTheme from '@/theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useAddTodo } from '../../api/useTodos';
import createHomeInputStyles from './HomeInput.styles';

const HomeInput = () => {
  const { colors } = useTheme();
  const styles = createHomeInputStyles(colors);

  const [text, setText] = useState('');

  const addTodo = useAddTodo();
  const handleAddTodo = () => {
    if (isEmpty(text)) return;
    addTodo({ text });
    setText('');
  };
  const isDisabled = isEmpty(text);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor={colors.textMuted}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleAddTodo}
        disabled={isDisabled}
        touchSoundDisabled={isDisabled}
      >
        <LinearGradient
          colors={isDisabled ? colors.gradients.empty : colors.gradients.success}
          style={styles.button}
        >
          <Ionicons name="add" style={isDisabled ? styles.buttonDisabledIcon : styles.buttonIcon} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default HomeInput;
