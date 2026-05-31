import { View, TextInput, TouchableOpacity } from 'react-native';
import useTheme from '@/theme/useTheme';
import createHomeInputStyles from './HomeInput.styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeInput = () => {
  const { colors } = useTheme();
  const styles = createHomeInputStyles(colors);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor={colors.textMuted}
      />
      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient colors={colors.gradients.success} style={styles.button}>
          <Ionicons name="add" style={styles.buttonIcon} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default HomeInput;
