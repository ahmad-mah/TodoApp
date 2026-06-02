import useTheme from '@/theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  iconName: string;
  label?: string;
  gradientColors?: string[];
  color?: string;
  onPress?: () => void;
  variant?: 'icon' | 'button';
};

export default function IconButton({
  iconName,
  label,
  gradientColors,
  color,
  onPress,
  variant = 'icon',
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  if (variant === 'button') {
    return (
      <LinearGradient
        colors={(gradientColors as any) ?? colors.gradients.success}
        style={{ borderRadius: 12 }}
      >
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer} onPress={onPress}>
          <Ionicons name={iconName as any} style={styles.icon} />
          {label ? <Text style={styles.label}>{label}</Text> : null}
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ ...styles.iconOnlyContainer, backgroundColor: color }}
      onPress={onPress}
    >
      <Ionicons name={iconName as any} style={styles.icon} />
    </TouchableOpacity>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    buttonContainer: {
      borderRadius: 12,
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
      paddingHorizontal: 22,
    },
    iconOnlyContainer: {
      height: 38,
      width: 38,
      borderRadius: 26,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: colors.text,
      fontSize: 16,
    },
    label: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.text,
    },
  });
