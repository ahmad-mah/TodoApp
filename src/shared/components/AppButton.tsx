import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
};

const AppButton = ({ label, onPress, style }: AppButtonProps) => (
  <Pressable
    style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
    onPress={onPress}
  >
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 320,
    marginTop: 12,
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default AppButton;
